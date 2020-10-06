precision highp float;
precision highp int;

attribute vec4 position;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat3 normalMatrix;

uniform float uTime;
uniform float uWidth;
uniform float uSpeed;
uniform float uHeight;

varying float time;

void main() {
  time = mod(uTime, 1.5 / uSpeed) * uSpeed + position.z - 1.0;
  float d = clamp(0.0, uWidth * mix(1.0, 0.5, min(1.0, uHeight)), time);
  float s = d + (0.1 * position.w);
  vec3 P = vec3(s * position.xy, uHeight * time);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(P, 1.0);
}