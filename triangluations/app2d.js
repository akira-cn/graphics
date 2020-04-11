const vertices = [
  [-0.7, 0.5],
  [-0.4, 0.3],
  [-0.25, 0.71],
  [-0.1, 0.56],
  [-0.1, 0.13],
  [0.4, 0.21],
  [0, -0.6],
  [-0.3, -0.3],
  [-0.6, -0.3],
  [-0.45, 0.0],
];

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const {width, height} = canvas;
ctx.translate(0.5 * width, 0.5 * height);
ctx.scale(1, -1);

const poitions = vertices.map(([x, y]) => [x * 256, y * 256]);

function draw(ctx, points, strokeStyle = 'black', fillStyle = null) {
  ctx.strokeStyle = strokeStyle;
  ctx.beginPath();
  ctx.moveTo(...points[0]);
  for(let i = 1; i < points.length; i++) {
    ctx.lineTo(...points[i]);
  }
  ctx.closePath();
  if(fillStyle) {
    ctx.fillStyle = fillStyle;
    ctx.fill();
  }
  ctx.stroke();
}

function isPointInPath(ctx, x, y) {
  const cloned = ctx.canvas.cloneNode().getContext('2d');
  cloned.translate(0.5 * width, 0.5 * height);
  cloned.scale(1, -1);
  let ret = false;
  draw(cloned, poitions, 'transparent', 'red');
  ret |= cloned.isPointInPath(x, y);
  if(!ret) {
    draw(cloned, [[100, 100], [100, 200], [150, 200]], 'transparent', 'blue');
    ret |= cloned.isPointInPath(x, y);
  }
  return ret;
}

draw(ctx, poitions, 'transparent', 'red');
draw(ctx, [[100, 100], [100, 200], [150, 200]], 'transparent', 'blue');

const {left, top} = canvas.getBoundingClientRect();

canvas.addEventListener('mousemove', (evt) => {
  const {x, y} = evt;
  // 坐标转换
  const offsetX = x - left;
  const offsetY = y - top;

  ctx.clearRect(-256, -256, 512, 512);

  if(isPointInPath(ctx, offsetX, offsetY)) {
    draw(ctx, poitions, 'transparent', 'green');
    draw(ctx, [[100, 100], [100, 200], [150, 200]], 'transparent', 'orange');
  } else {
    draw(ctx, poitions, 'transparent', 'red');
    draw(ctx, [[100, 100], [100, 200], [150, 200]], 'transparent', 'blue');
  }
});