import {Vec3} from '../common/lib/math/Vec3.js';
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

function randomRGB() {
  return new Vec3(
    0.5 * Math.random(),
    0.7,
    0.45,
  );
}

ctx.translate(256, 256);
ctx.scale(1, -1);

const [h, s, l] = randomRGB();
for(let i = 0; i < 3; i++) {
  const p = (i * 0.25 + h) % 1;
  for(let j = 0; j < 5; j++) {
    const d = j - 2;
    ctx.fillStyle = `hsl(${Math.floor(p * 360)}, ${Math.floor((0.15 * d + s) * 100)}%, ${Math.floor((0.12 * d + l) * 100)}%)`;
    ctx.beginPath();
    ctx.arc((j - 2) * 60, (i - 1) * 60, 20, 0, Math.PI * 2);
    ctx.fill();
  }
}