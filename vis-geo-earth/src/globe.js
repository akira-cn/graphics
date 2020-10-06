import {shaders, Sphere, Geometry, Mesh3d, Vec3} from 'sprite-extend-3d';
import {Color} from 'spritejs';
import config from './config';
import {loadMap, latlngToPosition, highlightMap} from './map';

import coronaVertex from './shaders/corona.vert';
import coronaFragment from './shaders/corona.frag';

import skyVertex from './shaders/sky.vert';
import skyFragment from './shaders/sky.frag';

import defaultGlobeFragment from './shaders/globe.frag';
import defaultGlobeTexturedFragment from './shaders/globe_texture.frag';
import defaultGlobeTexturedNormalMapFragment from './shaders/globe_texture_normal_map.frag';
import defaultGlobeNormalMapFragment from './shaders/globe_normal_map.frag';
const defaulGlobeVertex = shaders.GEOMETRY_WITH_TEXTURE.vertex;
const defaulGlobeNormalTexturedMapVertex = shaders.TEXTURE_NORMAL_MAP_300.vertex;

const defaultAttrs = {
  radius: 1,
  colors: '#333',
  rotateX: -30,
  rotateY: 150,
  widthSegments: 64,
  heightSegments: 32,
};

function createSky(layer, skyProgram) {
  skyProgram = skyProgram || layer.createProgram({
    vertex: skyVertex,
    fragment: skyFragment,
    transparent: true,
    cullFace: null,
  });
  const skyBox = new Sphere(skyProgram);
  skyBox.attributes.scale = 100;
  layer.append(skyBox);
  return skyBox;
}

function createCorona(layer, coronaProgram, orbit, coronaColor) {
  function makeCoronaVerts() {
    const vertex = [];
    const n_segments = 128;
    for(let i = 0; i <= n_segments; i++) {
      const theta = Math.PI * 2 * i / n_segments;
      const u = i / (n_segments + 1);
      const x = Math.cos(theta);
      const y = Math.sin(theta);
      vertex.push(x, y, u, 0, x, y, u, 1);
    }
    return {data: vertex, size: 4};
  }

  const position = makeCoronaVerts();
  const geometry = new Geometry(layer.gl, {position});
  const coronaTexture = layer.createTexture({
    image: config.coronaTexture,
    generateMipmaps: true,
    wrapS: layer.gl.REPEAT,
    wrapT: layer.gl.CLAMP_TO_EDGE,
  });

  coronaProgram = coronaProgram || layer.createProgram({
    vertex: coronaVertex,
    fragment: coronaFragment,
    // depthTest: false,
    texture: coronaTexture,
    // texture,
    uniforms: {
      zoff: {value: 0},
      uTime: {value: 0},
      color0: {value: new Color(coronaColor)},
      color1: {value: [0.00, 0.00, 0.00]},
    },
    transparent: true,
    // cullFace: null,
  });

  layer.bindTime(coronaProgram);

  const mesh = new Mesh3d(coronaProgram, {model: geometry, mode: 'TRIANGLE_STRIP', raycast: 'none'});
  const corona = layer.createSublayer();
  corona.append(mesh);
  layer.append(corona);
  if(orbit) layer.setOrbit({camera: corona.camera, maxDistance: 50, enableRotate: false});
  layer.corona = corona;
}

function debounce(fn, delay = 300) {
  let timer = null;
  return function (...args) {
    if(timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

export function createGlobe(layer, {
  program,
  vertex = null,
  fragment = null,
  data = config.topojsonData,
  orbit = true,
  raycast = false,
  highlight = false,
  tick,
  sky = true,
  skyProgram = null,
  corona = true,
  coronaProgram = null,
  autoResize = true,
  texture: globeTexture = null,
  normalMap = null,
  bumpMap = null,
  normalScale = 1.0,
  ...attrs} = {}) {
  const texture = layer.createTexture({});

  loadMap(data).then((bitmap) => {
    texture.image = bitmap;
    texture.needsUpdate = true;
    layer.forceUpdate();
  });

  if(!program) {
    if(globeTexture) {
      if(!normalMap) {
        program = layer.createProgram({
          fragment: fragment || defaultGlobeTexturedFragment,
          vertex: vertex || defaulGlobeVertex,
          // transparent: true,
          cullFace: null,
          texture,
          uniforms: {
            tMapSkin: {value: globeTexture},
            highlight: {value: highlight},
          },
        });
      } else {
        program = layer.createProgram({
          fragment: fragment || defaultGlobeTexturedNormalMapFragment,
          vertex: vertex || defaulGlobeNormalTexturedMapVertex,
          // transparent: true,
          cullFace: null,
          texture,
          normalMap,
          uniforms: {
            tMapSkin: {value: globeTexture},
            tBump: {value: bumpMap},
            highlight: {value: highlight},
            uNormalScale: {value: normalScale},
          },
        });
      }
    } else if(!normalMap) {
      program = layer.createProgram({
        fragment: fragment || defaultGlobeFragment,
        vertex: vertex || defaulGlobeVertex,
        // transparent: true,
        cullFace: null,
        texture,
      });
    } else {
      program = layer.createProgram({
        fragment: fragment || defaultGlobeNormalMapFragment,
        vertex: vertex || defaulGlobeNormalTexturedMapVertex,
        normalMap,
        uniforms: {
          tBump: {value: bumpMap},
          uNormalScale: {value: normalScale},
        },
        // transparent: true,
        cullFace: null,
        texture,
      });
    }
  }

  attrs = Object.assign({}, defaultAttrs, attrs);

  const globe = new Sphere(program, attrs);
  layer.append(globe);

  globe.enableOrbit = orbit;
  globe.updateTicker = true;

  if(orbit) layer.setOrbit({maxDistance: 50});
  if(raycast) layer.setRaycast();
  if(tick) {
    layer.tick(() => {
      if(globe.updateTicker) {
        tick.call(globe);
      }
    });
  }

  if(sky) {
    createSky(layer, skyProgram);
  }

  if(corona) {
    createCorona(layer, coronaProgram, orbit, typeof corona === 'boolean' ? 'rgb(18, 64, 41)' : corona);
  }

  if(autoResize) {
    let {width: width0} = layer.getResolution();
    layer.addEventListener('resolutionchange', debounce((evt) => {
      const {width} = evt.detail;
      const camera = layer.camera;
      layer.setOrbit(null);
      const pos = new Vec3().copy(camera.attributes.pos).scale(width0 / width);
      camera.attributes.pos = pos;
      const corona = layer.corona;
      if(corona) {
        corona.camera.attributes.z *= width0 / width;
        if(orbit) layer.setOrbit({camera: corona.camera, maxDistance: 50, enableRotate: false});
      }
      if(orbit) layer.setOrbit({maxDistance: 50});
      width0 = width;
    }));
  }

  if(highlight) {
    globe.addEventListener('mousemove', (e) => {
      highlightMap(globe, {pos: e.hit.localPoint});
    });
  }

  return globe;
}

export function setGlobeTarget(globe, target, {latitude, longitude, transpose = false, ...attrs}) {
  const radius = globe.attributes.radius;
  if(transpose) target.transpose();
  if(latitude != null && longitude != null) {
    const scale = target.attributes.scaleY * (attrs.scale || 1.0);
    const height = target.attributes.height;
    const pos = latlngToPosition(latitude, longitude, radius);
    // 要将底部放置在地面上
    pos.scale(height * 0.5 * scale / radius + 1);
    attrs.pos = pos;
  }
  target.attr(attrs);
  const sp = new Vec3().copy(attrs.pos).scale(2);
  target.lookAt(sp);
  globe.append(target);
}