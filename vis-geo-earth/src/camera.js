import {Vec3, Mat4} from 'sprite-extend-3d';
import {latlngToPosition} from './map';

export function cameraTo(globe, {to, latitude, longitude, duration = 500}) {
  const layer = globe.layer;
  if(!layer) return;
  const orbit = globe.enableOrbit;
  const radius = globe.attributes.radius;

  if(orbit) layer.setOrbit(null);

  const camera = layer.camera;
  const from = new Vec3(...camera.attributes.pos);
  const r = from.len();
  const m = new Mat4().copy(globe.worldMatrix);

  if(latitude != null && longitude != null) {
    to = latlngToPosition(latitude, longitude, radius);
  }
  to.applyMatrix4(m).scale(r);
  const startTime = Date.now();

  globe.updateTicker = false;

  function update() {
    const p = Math.min((Date.now() - startTime) / duration);
    const pos = new Vec3().copy(from).lerp(to, p).normalize()
      .scale(r);
    camera.attributes.pos = pos;
    camera.lookAt([0, 0, 0]);
    if(p < 1.0) {
      requestAnimationFrame(update);
    } else if(orbit) {
      globe.updateTicker = true;
      layer.setOrbit({maxDistance: 50});
      const corona = layer.corona;
      if(corona) {
        layer.setOrbit({camera: corona.camera, maxDistance: 50, enableRotate: false});
      }
    }
  }
  update();
}