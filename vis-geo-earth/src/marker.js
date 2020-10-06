// 地图上添加标记物
import {Color} from 'spritejs';
import {Geometry, Mesh3d} from 'sprite-extend-3d';
import {latlngToPosition} from './map';
import {setGlobeTarget} from './globe';

import markerVertex from './shaders/marker.vert';
import markerFragment from './shaders/marker.frag';

import spotVertex from './shaders/spot.vert';
import spotFragment from './shaders/spot.frag';

function makeSpotVerts(radis = 1.0, n_segments) {
  const vertex = [];
  for(let i = 0; i <= n_segments; i++) {
    const theta = Math.PI * 2 * i / n_segments;
    const x = radis * Math.cos(theta);
    const y = radis * Math.sin(theta);
    vertex.push(x, y, 1, 0, x, y, 1, 1.0);
  }
  return {
    position: {data: vertex, size: 4},
  };
}

function makeMarkerVerts(radis = 1.0, n_segments) {
  const vertex = [];
  for(let i = 0; i <= n_segments; i++) {
    const theta = Math.PI * 2 * i / n_segments;
    const x = radis * Math.cos(theta);
    const y = radis * Math.sin(theta);
    vertex.push(x, y, 1, 0, x, y, 1, 1.0);
  }
  const copied = [...vertex];
  vertex.push(...copied.map((v, i) => {
    return i % 4 === 2 ? 0.33 : v;
  }));
  vertex.push(...copied.map((v, i) => {
    return i % 4 === 2 ? 0.67 : v;
  }));
  return {
    position: {data: vertex, size: 4},
  };
}

function initMarker(layer, globe, {width, height, speed, color, segments}) {
  const markerProgram = layer.createProgram({
    transparent: true,
    vertex: markerVertex,
    fragment: markerFragment,
    uniforms: {
      uTime: {value: 0},
      uColor: {value: new Color(color).slice(0, 3)},
      uWidth: {value: width},
      uSpeed: {value: speed},
      uHeight: {value: height},
    },
  });

  const markerGeometry = new Geometry(layer.gl, makeMarkerVerts(globe.attributes.radius, segments));

  const spotProgram = layer.createProgram({
    transparent: true,
    vertex: spotVertex,
    fragment: spotFragment,
    uniforms: {
      uTime: {value: 0},
      uColor: {value: new Color(color).slice(0, 3)},
      uWidth: {value: width},
      uSpeed: {value: speed},
      uHeight: {value: height},
    },
  });

  const spotGeometry = new Geometry(layer.gl, makeSpotVerts(globe.attributes.radius, segments));

  return {
    program: markerProgram,
    geometry: markerGeometry,
    spotGeometry,
    spotProgram,
    mode: 'TRIANGLE_STRIP',
  };
}

export function addMarker(globe, {
  latitude,
  longitude,
  width = 1.0,
  height = 0.0,
  speed = 1.0,
  color = 'rgb(245,250,113)',
  segments = 60,
  lifeTime = Infinity} = {}) {
  const layer = globe.layer;
  const radius = globe.attributes.radius;

  if(layer) {
    let mode = 'TRIANGLES';

    const ret = initMarker(layer, globe, {width, height, speed, color, segments});
    const markerProgram = ret.program;
    const markerGeometry = ret.geometry;
    const spotProgram = ret.spotProgram;
    const spotGeometry = ret.spotGeometry;
    mode = ret.mode;

    if(markerProgram) {
      const pos = latlngToPosition(latitude, longitude, radius);
      const marker = new Mesh3d(markerProgram, {model: markerGeometry, mode});
      const spot = new Mesh3d(spotProgram, {model: spotGeometry, mode});
      setGlobeTarget(globe, marker, {pos, scale: 0.05, raycast: 'none'});
      setGlobeTarget(globe, spot, {pos, scale: 0.05, raycast: 'none'});
      layer.bindTime(marker.program);

      if(Number.isFinite(lifeTime)) {
        setTimeout(() => {
          layer.unbindTime(marker.program);
          marker.dispose();
          spot.dispose();
          marker.program.remove();
          spot.program.remove();
        }, lifeTime);
      }
      return {marker, spot};
    }
  }
}