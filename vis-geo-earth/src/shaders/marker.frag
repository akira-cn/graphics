precision highp float;
precision highp int;

uniform vec2 uResolution;
uniform vec3 uColor;

varying float time;

void main() {
  float t = clamp(0.0, 1.0, time);
  gl_FragColor.rgb = uColor;
  gl_FragColor.a = 1.0 - t;
}