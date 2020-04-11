import {earcut} from '../common/lib/earcut.js';

const canvas = document.querySelector('canvas');
const gl = canvas.getContext('webgl');

const vertex = `
attribute vec2 position;

void main() {
  gl_PointSize = 1.0;
  gl_Position = vec4(position, 1.0, 1.0);
}
`;

const fragment = `
precision mediump float;

void main()
{
  gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
}    
`;

const vertexShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShader, vertex);
gl.compileShader(vertexShader);

const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShader, fragment);
gl.compileShader(fragmentShader);


const program = gl.createProgram();
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
gl.linkProgram(program);
gl.useProgram(program);

// const points = new Float32Array([
//   -1, -1,
//   0, 1,
//   1, -1,
// ]);

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

const points = vertices.flat();
const triangles = earcut(points);
// console.log(triangles);

const position = new Float32Array(points);
const cells = new Uint16Array(triangles);

const pointBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, pointBuffer);
gl.bufferData(gl.ARRAY_BUFFER, position, gl.STATIC_DRAW);

const vPosition = gl.getAttribLocation(program, 'position');
gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(vPosition);

const cellsBuffer = gl.createBuffer();
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cellsBuffer);
gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, cells, gl.STATIC_DRAW);

gl.clear(gl.COLOR_BUFFER_BIT);
gl.drawElements(gl.LINE_STRIP, cells.length, gl.UNSIGNED_SHORT, 0);

// const canvas = document.querySelector('canvas');
// const ctx = canvas.getContext('2d');
// const {width, height} = canvas;
// ctx.translate(0.5 * width, 0.5 * height);
// ctx.scale(1, -1);

// const poitions = vertices.map(([x, y]) => [x * 256, y * 256]);

// function draw(points, strokeStyle = 'black', fillStyle = null) {
//   ctx.strokeStyle = strokeStyle;
//   ctx.beginPath();
//   ctx.moveTo(...points[0]);
//   for(let i = 1; i < points.length; i++) {
//     ctx.lineTo(...points[i]);
//   }
//   ctx.closePath();
//   if(fillStyle) {
//     ctx.fillStyle = fillStyle;
//     ctx.fill();
//   }
//   ctx.stroke();
// }

// draw(poitions);