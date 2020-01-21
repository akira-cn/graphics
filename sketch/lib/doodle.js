const commandList = [];

const position = [0, 0];
const direction = [1, 0];

function rotate(deg) {
  const rad = deg * Math.PI / 180,
    c = Math.cos(rad),
    s = Math.sin(rad);

  // [c, s, -s, c]

  const [x, y] = direction;

  direction[0] = x * c + y * -s;
  direction[1] = x * s + y * c;
}

export function pen(lineWidth, color = 'black') {
  commandList.push({
    command: 'pen',
    args: {color, lineWidth},
  });
  put(...position);
}

export function put(x, y) {
  position[0] = x;
  position[1] = y;
  commandList.push({
    command: 'put',
    args: {x, y},
  });
}


export function left(deg) {
  rotate(deg);
}

export function right(deg) {
  rotate(-deg);
}

export function forward(length) {
  position[0] += length * direction[0];
  position[1] += length * direction[1];

  commandList.push({
    command: 'forward',
    args: {
      x: position[0],
      y: position[1],
    },
  });
}

export function render(parser) {
  parser([...commandList]);
  commandList.length = 0;
}