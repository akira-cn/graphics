export default function (container, options = {}) {
  const canvas = container;
  return (commands) => {
    const ctx = canvas.getContext('2d', options);
    function project({x, y}) { // -1 ~ 1
      return {
        x: 0.5 * (x + 1) * canvas.width,
        y: 0.5 * (1 - y) * canvas.height,
      };
    }

    commands.forEach(({command, args}, idx) => {
      if(command === 'pen') {
        if(idx > 0) ctx.stroke();
        const {strokeColor, lineWidth} = args;
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = lineWidth;
        ctx.beginPath();
      } else if(command === 'put') {
        const {x, y} = project(args);
        ctx.moveTo(x, y);
      } else if(command === 'forward') {
        const {x, y} = project(args);
        ctx.lineTo(x, y);
      }
    });

    ctx.stroke();
  };
}