import {parametric} from '../common/lib/parametric.js';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const {width, height} = canvas;
const w = 0.5 * width,
  h = 0.5 * height;
ctx.translate(w, h);
ctx.scale(1, -1);

function drawAxis() {
  ctx.save();
  ctx.strokeStyle = '#ccc';
  ctx.beginPath();
  ctx.moveTo(-w, 0);
  ctx.lineTo(w, 0);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0, -h);
  ctx.lineTo(0, h);
  ctx.stroke();
  ctx.restore();
}

drawAxis();

const para = parametric(
  t => 25 * t,
  t => 25 * t ** 2,
);

para(-5.5, 5.5).draw(ctx);

const helical = parametric(
  (t, l) => l * t * Math.cos(t),
  (t, l) => l * t * Math.sin(t),
);

helical(0, 50, 500, 5).draw(ctx, {strokeStyle: 'blue'});

const star = parametric(
  (t, l) => l * Math.cos(t) ** 3,
  (t, l) => l * Math.sin(t) ** 3,
);

star(0, Math.PI * 2, 50, 150).draw(ctx, {strokeStyle: 'red'});