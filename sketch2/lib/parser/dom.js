export default function (container, options = {}) {
  return (commands) => {
    container.innerHTML = '';

    const fragment = document.createDocumentFragment();

    function project({x, y}) { // -1 ~ 1
      return {
        x: 0.5 * (x + 1) * container.clientWidth,
        y: 0.5 * (1 - y) * container.clientHeight,
      };
    }

    let lineWidth = 0,
      color = 'black',
      mode = 'line-strip',
      x0 = 0,
      y0 = 0;

    function line(x1, y1, x2, y2) {
      const div = document.createElement('div');
      div.style.position = 'absolute';
      div.style.left = `${x1}px`;
      div.style.top = `${y1}px`;

      const dy = y2 - y1;
      const dx = x2 - x1;
      const angle = 180 * Math.atan2(dy, dx) / Math.PI;
      const length = Math.hypot(dx, dy);

      div.style.transformOrigin = '0 0';
      div.style.transform = `translate(0, -50%) rotate(${angle}deg)`;
      div.style.width = `${length}px`;
      div.style.height = `${lineWidth}px`;
      div.style.background = color;
      fragment.appendChild(div);
    }

    function point(x, y) {
      const div = document.createElement('div');
      div.style.position = 'absolute';
      div.style.left = `${x}px`;
      div.style.top = `${y}px`;
      div.style.width = 0;
      div.style.height = 0;
      div.style.border = `solid ${lineWidth / 2}px`;
      div.style.borderRadius = '50%';
      div.style.borderColor = color;
      fragment.appendChild(div);
    }

    commands.forEach(({command, args}, idx) => {
      if(command === 'pen') {
        lineWidth = args.lineWidth;
        color = args.color;
        mode = args.mode;
      } else if(command === 'put') {
        const {x, y} = project(args);
        x0 = x;
        y0 = y;
      } else if(command === 'forward') {
        const {x, y} = project(args);
        if(mode === 'line-strip') {
          line(x0, y0, x, y);
        } else if(mode === 'points') {
          point(x, y);
        }
        x0 = x;
        y0 = y;
      }
    });

    container.appendChild(fragment);
  };
}