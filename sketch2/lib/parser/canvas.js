export default function (container, options = {}) {
  const canvas = container;

  function project({x, y}) { // -1 ~ 1
    return {
      x: 0.5 * (x + 1) * canvas.width,
      y: 0.5 * (1 - y) * canvas.height,
    };
  }

  return (commands) => {
    const ctx = canvas.getContext('2d', options);

    let primitiveMode = 'line-strip';
    let currentLineWidth = 0;

    function draw() {
      if(primitiveMode === 'line-strip') {
        ctx.stroke();
      } else {
        ctx.fill();
      }
    }

    const trianglePoints = [];

    commands.forEach(({command, args}, idx) => {
      if(command === 'pen') {
        if(idx > 0) draw();
        const {color, lineWidth, mode} = args;
        ctx.strokeStyle = color;
        ctx.fillStyle = color;
        currentLineWidth = lineWidth;
        if(primitiveMode === 'line-strip') {
          ctx.lineWidth = lineWidth;
        } else {
          ctx.lineWidth = 1;
        }
        primitiveMode = mode;
        ctx.beginPath();
      } else if(command === 'put') {
        const {x, y} = project(args);
        ctx.moveTo(x, y);
        if(primitiveMode === 'triangles') {
          trianglePoints.length = 0; // clear trianglePoints;
          trianglePoints.push(x, y);
        }
      } else if(command === 'forward') {
        const {x, y} = project(args);
        if(primitiveMode === 'line-strip') {
          ctx.lineTo(x, y);
        } else if(primitiveMode === 'points') {
          ctx.moveTo(x, y);
          ctx.arc(x, y, currentLineWidth * 0.5, 0, Math.PI * 2);
        } else if(primitiveMode === 'triangles') {
          trianglePoints.push(x, y);
          if(trianglePoints.length === 6) {
            const [x0, y0, x1, y1, x2, y2] = trianglePoints;
            ctx.moveTo(x0, y0);
            ctx.lineTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.closePath();
            trianglePoints.length = 0;
          }
        }
      }
    });

    draw();
  };
}