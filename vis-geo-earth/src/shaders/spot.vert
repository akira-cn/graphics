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
varying vec2 st;

void main() {
  time = mod(uTime, 1.5 / uSpeed) * uSpeed + position.z - 1.0;
  float s = 0.0 + (0.2 * uWidth * position.w);
  vec3 P = vec3(s * position.xy, 0.0);
  st = P.xy;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(P, 1.0);
}