const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

ctx.translate(256, 256);
ctx.scale(1, -1);

for(let i = 0; i < 20; i++) {
  ctx.fillStyle = `hsl(${Math.floor(i * 15)}, 50%, 50%)`;
  ctx.beginPath();
  ctx.arc((i - 10) * 20, 60, 10, 0, Math.PI * 2);
  ctx.fill();
}

for(let i = 0; i < 20; i++) {
  ctx.fillStyle = `hsl(${Math.floor((i % 2 ? 60 : 210) + 3 * i)}, 50%, 50%)`;
  ctx.beginPath();
  ctx.arc((i - 10) * 20, -60, 10, 0, Math.PI * 2);
  ctx.fill();
}