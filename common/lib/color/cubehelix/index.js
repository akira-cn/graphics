import {add, multiply, scalarMul} from './matrix.js';

const defaultHelixConfig = {start: 0.5, r: -1.5, hue: 1.2, gamma: 1.0};

export function cubehelix(overrides = {}) {
  const options = Object.assign({}, defaultHelixConfig, overrides);

  const start = options.start;
  const r = options.r;
  const hue = options.hue;
  const gamma = options.gamma;

  return function (l) {
    if((l < 0) || (l > 1)) {
      throw new Error(`input must be in the [0, 1] range (was: ${l})`);
    }
    const phi = 2 * Math.PI * (start / 3 + r * l);
    const exp = l ** gamma;
    const alpha = hue * exp * (1 - exp) / 2;
    const rgb = add([[exp], [exp], [exp]],
      scalarMul(alpha, multiply([[-0.14861, 1.78277], [-0.29227, -0.90649], [1.97294, 0]], [[Math.cos(phi)], [Math.sin(phi)]])));
    return {r: rgb[0], g: rgb[1], b: rgb[2]};
  };
}