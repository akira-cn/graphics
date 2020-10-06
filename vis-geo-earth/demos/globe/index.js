const {Scene} = spritejs;
const container = document.getElementById('container');
const scene = new Scene({
  container,
});
const layer = scene.layer3d('fglayer', {
  alpha: false,
  camera: {
    fov: 35,
  },
});
layer.camera.attributes.pos = [0, 0, 3500 / Math.min(layer.width, layer.height)];
layer.camera.lookAt([0, 0, 0]);
layer.gl.clearColor(0, 0, 0, 1);

const {createGlobe,
  launchMissile,
  addMarker} = spritejs.globe;

const texture = layer.createTexture('https://img.alicdn.com/tfs/TB1mR3bX3nH8KJjSspcXXb3QFXa-9000-4500.jpg');

const globe = createGlobe(layer, {
  orbit: true,
  raycast: true,
  rotateY: 310,
  texture,
  tick() {
    this.attributes.rotateY += 0.1;
  },
  highlight: true,
});

function randomColor() {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 100%, 50%)`;
}

setInterval(() => {
  const from = {
    latitude: 90 - 180 * Math.random(),
    longitude: 180 - 360 * Math.random(),
  };
  const to = {
    latitude: 90 - 180 * Math.random(),
    longitude: 180 - 360 * Math.random(),
  };
  const color = randomColor();
  const lifeTime = 1000;
  const height = 2.0;
  const width = 1.0;

  addMarker(globe, {
    ...from,
    lifeTime,
    height,
    color,
    width,
    // speed: 0.5,
    // segments: 4,
  });

  setTimeout(() => {
    addMarker(globe, {
      ...to,
      lifeTime,
      height,
      color,
      width,
      // speed: 0.5,
      segments: 4,
    });
  }, 0.5 * lifeTime);

  launchMissile(globe, {
    from,
    to,
    color,
    lifeTime,
    height,
    thickness: 0.75 * width,
  });
}, 100);
