function draw(points, context, {
  strokeStyle = 'black',
  fillStyle = null,
  close = false,
} = {}) {
  context.strokeStyle = strokeStyle;
  context.beginPath();
  context.moveTo(...points[0]);
  for(let i = 1; i < points.length; i++) {
    context.lineTo(...points[i]);
  }
  if(close) context.closePath();
  if(fillStyle) {
    context.fillStyle = fillStyle;
    context.fill();
  }
  context.stroke();
}


export function parametric(xFunc, yFunc) {
  return function (start, end, seg = 100, ...args) {
    const points = [];
    for(let i = 0; i <= seg; i++) {
      const p = i / seg;
      const t = start * (1 - p) + end * p;
      const x = xFunc(t, ...args);
      const y = yFunc(t, ...args);
      points.push([x, y]);
    }
    return {
      draw: draw.bind(null, points),
      points,
    };
  };
}