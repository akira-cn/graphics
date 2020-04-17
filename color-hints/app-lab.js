const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

ctx.translate(256, 256);
ctx.scale(1, -1);

/* global d3 */
for(let i = 0; i < 20; i++) {
  const c = d3.lab(30, i * 15 - 150, i * 15 - 150).rgb();
  ctx.fillStyle = `rgb(${c.r}, ${c.g}, ${c.b})`;
  ctx.beginPath();
  ctx.arc((i - 10) * 20, 60, 10, 0, Math.PI * 2);
  ctx.fill();
}

for(let i = 0; i < 20; i++) {
  const c = d3.lab(i * 5, 80, 80).rgb();
  ctx.fillStyle = `rgb(${c.r}, ${c.g}, ${c.b})`;
  ctx.beginPath();
  ctx.arc((i - 10) * 20, -60, 10, 0, Math.PI * 2);
  ctx.fill();
}