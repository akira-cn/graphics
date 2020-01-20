#ifdef GL_ES
precision mediump float;
#endif

highp float random(vec2 co) {
  highp float a = 12.9898;
  highp float b = 78.233;
  highp float c = 43758.5453;
  highp float dt= dot(co.xy ,vec2(a,b));
  highp float sn= mod(dt,3.14);
  return fract(sin(sn) * c);
}

uniform vec2 resolution;
uniform float rate;
uniform float seed;

uniform sampler2D texture;
varying vec2 vTextureCoord;

void main() {
  vec2 st = gl_FragCoord.xy / resolution;
  st = floor(10.0 * st);
  float p = random(st + seed);
  p = 1.0 - step(rate, p);

  vec2 texCoord = vec2(vTextureCoord.x, 1.0 - vTextureCoord.y);
  vec4 texColor = texture2D(texture, texCoord);

  gl_FragColor = texColor + vec4(0, 0, 1.0, 1.0) * (1.0 - sign(length(texColor.rgb))) * p;
}