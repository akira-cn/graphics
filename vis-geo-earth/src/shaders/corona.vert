precision highp float;
precision highp int;

attribute vec4 position;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat3 normalMatrix;

uniform float zoff;

varying vec2 v_texcoord;

// corona.vertex //
void main() {
  float s = 1.0 + (0.9 * position.w);
  vec3 P = vec3(s * position.xy, zoff);
  P = normalMatrix * P;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(P, 1.0);
  v_texcoord = position.zw;
}  