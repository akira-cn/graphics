precision highp float;
precision highp int;

uniform vec2 uResolution;
uniform vec3 uColor;
uniform float uWidth;

varying float time;
varying vec2 st;

void main() {
  float d = distance(st, vec2(0));
  gl_FragColor.rgb = uColor + 1.5 * (0.2 * uWidth - 2.0 * d);
  gl_FragColor.a = 1.0;
}