precision highp float;

uniform float uTotalLength;
uniform float uTime;
uniform float uDuration;

varying vec4 vColor;
varying float fSeg;

void main() {
  float p = clamp(0.0, 1.0, uTime * 3.0 / 4.0 / uDuration) * 2.0;
  float sp = fSeg / uTotalLength;
  float ep;
  float light = 0.0;
  if(p < 0.5) {
    ep = (1.0 - step(p, sp)) * smoothstep(0.0, 0.3, sp);
    light = ep * abs(sp - 0.5 * p) / 0.5 * p;
  }
  else if(p < 1.0) {
    ep = (1.0 - step(p, sp)) * smoothstep(p - 0.5, p - 0.2, sp);
    light = ep * abs(p - 0.5 - sp) / 0.5;
  }
  else {
    ep = step(p - 1.0, sp) * smoothstep(p - 0.5, p - 0.2, sp);
  }
  gl_FragColor.rgb = vColor.rgb + 0.35 * light * ep; // TODO: 亮度用 hsb 调
  gl_FragColor.a = vColor.a * ep;
}