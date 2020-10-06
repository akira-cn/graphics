precision highp float;

uniform float uTotalLength;
uniform float uDashLength;
uniform float uDashOffset;
uniform float uTime;

varying vec4 vColor;
varying vec2 vUv;
varying float fSeg;

/**
  rgb/hsb颜色转换
 */
vec3 rgb2hsb(vec3 c){
  vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
  vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
  vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
  float d = q.x - min(q.w, q.y);
  float e = 1.0e-10;
  return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}

//  Function from Iñigo Quiles
//  https://www.shadertoy.com/view/MsS3Wc
vec3 hsb2rgb(vec3 c){
  vec3 rgb = clamp(abs(mod(c.x*6.0+vec3(0.0,4.0,2.0), 6.0)-3.0)-1.0, 0.0, 1.0);
  rgb = rgb * rgb * (3.0 - 2.0 * rgb);
  return c.z * mix(vec3(1.0), rgb, c.y);
}

#define PI 3.141592653589793

void main() {
  float f = fract((uDashOffset + fSeg) / (2.0 * uDashLength));
  f = 1.0 - step(0.5, f);
  float t = 1.0 - fSeg / uTotalLength;

  vec3 color = rgb2hsb(vColor.rgb);
  color.z += 1.618 * mix(-0.2, 1.0, 0.5 + 0.5 * sin(2.5 * uTime + PI * t));
  color = hsb2rgb(color);

  float alpha = 0.2 + 0.8 * vColor.a * t;

  gl_FragColor = vec4(color, alpha) * f;
}