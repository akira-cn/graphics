import {Vec3} from '../common/lib/math/Vec3.js';
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

function randomRGB() {
  return new Vec3(
    0.5 * Math.random(),
    0.5 * Math.random(),
    0.5 * Math.random(),
  );
}

ctx.translate(256, 256);
ctx.scale(1, -1);

for(let i = 0; i < 3; i++) {
  const colorVector = randomRGB();
  for(let j = 0; j < 5; j++) {
    const c = colorVector.clone().scale(0.5 + 0.25 * j);
    ctx.fillStyle = `rgb(${Math.floor(c[0] * 256)}, ${Math.floor(c[1] * 256)}, ${Math.floor(c[2] * 256)})`;
    ctx.beginPath();
    ctx.arc((j - 2) * 60, (i - 1) * 60, 20, 0, Math.PI * 2);
    ctx.fill();
  }
}