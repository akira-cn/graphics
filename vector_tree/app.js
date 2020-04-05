import {Vector2D} from './lib/utils.js';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

ctx.translate(0, canvas.height);
ctx.scale(1, -1);
ctx.lineCap = 'round';

function drawTree(context, v0, length, thickness, rad, bias) {
  const v = new Vector2D().rotate(rad).scale(length);
  const v1 = v0.copy().add(v);

  context.lineWidth = thickness;
  context.beginPath();
  context.moveTo(...v0);
  context.lineTo(...v1);
  context.stroke();

  if(thickness > 2) {
    const left = Math.PI / 4 + 0.5 * (rad + 0.3) + bias * (Math.random() - 0.5);
    drawTree(context, v1, length * 0.9, thickness * 0.8, left, bias * 0.9);
    const right = Math.PI / 4 + 0.5 * (rad - 0.3) + bias * (Math.random() - 0.5);
    drawTree(context, v1, length * 0.9, thickness * 0.8, right, bias * 0.9);
  }
  if(thickness < 5 && Math.random() < 0.3) {
    context.save();
    context.strokeStyle = '#c72c35';
    const th = Math.random() * 6 + 3;
    context.lineWidth = th;
    context.beginPath();
    context.moveTo(...v1);
    context.lineTo(v1.x, v1.y - 2);
    context.stroke();
    context.restore();
  }
}

const v0 = new Vector2D(256, 0);
drawTree(ctx, v0, 50, 10, 1, 3);