// 在地图上添加光柱
import {Cylinder} from 'sprite-extend-3d';
import {setGlobeTarget} from './globe';

import vertex from './shaders/beam.vert';
import fragment from './shaders/beam.frag';

export function addBeam(globe, {
  latitude,
  longitude,
  width = 1.0,
  height = 25.0,
  color = 'rgba(245,250,113, 0.5)',
  raycast = 'none',
  segments = 60} = {}) {
  const layer = globe.layer;
  const radius = globe.attributes.radius;
  if(layer) {
    const r = width / 2;
    const scale = radius * 0.015;
    const program = layer.createProgram({
      transparent: true,
      vertex,
      fragment,
      uniforms: {
        uHeight: {value: height},
      },
    });
    const beam = new Cylinder(program, {
      radiusTop: r,
      radiusBottom: r,
      radialSegments: segments,
      height,
      colors: color,
    });
    setGlobeTarget(globe, beam, {transpose: true, latitude, longitude, scale, raycast});
    return beam;
  }
}
