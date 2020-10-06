precision highp float;
precision highp int;

uniform sampler2D tMap;
uniform float uTime;
uniform vec4 color0;
uniform vec3 color1;

varying vec2 v_texcoord;

void main() {
  vec2 uv = vec2(5.0 * v_texcoord.x + 0.01 * uTime, 0.8 - 1.5 * v_texcoord.y);
  float smoke = texture2D(tMap, uv).r;
  uv = vec2(3.0 * v_texcoord.x - 0.007 * uTime, 0.9 - 0.5 * v_texcoord.y);
  smoke *= 1.5 * texture2D(tMap, uv).r;

  float t = pow(v_texcoord.y, 0.25);
  gl_FragColor.rgb = mix(color0.rgb, color1, t) + 0.3 * smoke;
  gl_FragColor.a = color0.a;
}