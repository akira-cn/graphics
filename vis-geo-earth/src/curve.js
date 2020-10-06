import {Curve, Polyline3d, Vec3} from 'sprite-extend-3d';
import {latlngToPosition} from './map';

import vertex from './shaders/curve.vert';
import fragment from './shaders/curve.frag';

export function addCurve(globe, {
  from,
  to,
  color = 'rgb(232,22,140)',
  thickness = 1.0,
  height = 1.0,
  dashLength = 10e6,
  dashOffset = 0,
}) {
  const layer = globe.layer;
  if(layer) {
    const radius = globe.attributes.radius;
    const p0 = latlngToPosition(from.latitude, from.longitude, radius);
    const p1 = latlngToPosition(to.latitude, to.longitude, radius);
    const cp = new Vec3().copy(p0).lerp(p1, 0.382).normalize()
      .scale(1.0 + 0.382 * height);
    const curve = new Curve({
      points: [
        p0,
        cp,
        p1,
      ],
      type: Curve.QUADRATICBEZIER,
    });
    const points = curve.getPoints(50);
    const program = layer.createProgram({
      transparent: true,
      vertex,
      fragment,
      uniforms: {
        uThickness: {value: thickness},
        uDashLength: {value: dashLength},
        uDashOffset: {value: dashOffset},
        uTime: {value: 0},
      },
    });

    layer.bindTime(program);

    const pe = new Vec3().copy(points[Math.floor(points.length * 0.5)]).scale(10);
    const _points = points.map((p, i) => [p[0] - pe[0], p[1] - pe[1], p[2] - pe[2]]);

    const polyline = new Polyline3d(program, {
      points: _points,
      colors: color,
      pos: pe,
    });

    globe.append(polyline);
    return polyline;
  }
}