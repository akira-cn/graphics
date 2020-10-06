import {Vec3, Polyline3d} from 'sprite-extend-3d';
import {latlngToPosition} from './map';

import vertex from './shaders/missile.vert';
import fragment from './shaders/missile.frag';

function projectPoints(from, to, {radius = 1, height = 1} = {}) {
  from = latlngToPosition(from.latitude, from.longitude, radius);
  to = latlngToPosition(to.latitude, to.longitude, radius);

  const dist = from.distance(to);
  const n = Math.max(Math.floor(dist * radius * 100), 24);

  const points = [];
  points.push(from);
  for(let i = 1; i < n; i++) {
    const d = i / n;
    const a = 0.5 - Math.abs(d - 0.5);
    const p = new Vec3().copy(from).lerp(to, d).normalize()
      .scale(1 + 0.1 * height * a);
    points.push(p);
  }
  points.push(to);
  return points;
}

export function launchMissile(globe, {
  from,
  to,
  color = 'rgb(232,22,140)',
  thickness = 1.0,
  height = 1.0,
  lifeTime = 1000}) {
  const layer = globe.layer;
  if(layer) {
    const radius = globe.attributes.radius;
    const points = projectPoints(from, to, {radius, height});

    const curveProgram = layer.createProgram({
      transparent: true,
      vertex,
      fragment,
      uniforms: {
        uThickness: {value: 1.5 * thickness},
        uTime: {value: 0},
        uDuration: {value: lifeTime * 0.001},
      },
      depthTest: true,
    });
    layer.bindTime(curveProgram);

    const pe = new Vec3().copy(points[Math.floor(points.length * 0.5)]).scale(10);
    const _points = points.map((p, i) => [p[0] - pe[0], p[1] - pe[1], p[2] - pe[2]]);
    const p = new Polyline3d(curveProgram, {
      points: _points,
      colors: color,
      pos: pe, // 曲线要设在中点的位置，否则的话计算zDepth会导致透明度叠加出问题
    });
    globe.append(p);

    setTimeout(() => {
      layer.unbindTime(curveProgram);
      p.dispose();
      curveProgram.remove();
    }, lifeTime * 1.2);
  }
}