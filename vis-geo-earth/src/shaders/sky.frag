precision highp float;
precision highp int;
varying vec2 vUv;

highp float random(vec2 co)
{
  highp float a = 12.9898;
  highp float b = 78.233;
  highp float c = 43758.5453;
  highp float dt= dot(co.xy ,vec2(a,b));
  highp float sn= mod(dt,3.14);
  return fract(sin(sn) * c);
}

// Value Noise by Inigo Quilez - iq/2013
// https://www.shadertoy.com/view/lsf3WH
highp float noise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix( mix( random( i + vec2(0.0,0.0) ),
                   random( i + vec2(1.0,0.0) ), u.x),
              mix( random( i + vec2(0.0,1.0) ),
                   random( i + vec2(1.0,1.0) ), u.x), u.y);
}

void main() {
  gl_FragColor.rgb = vec3(1.0);
  gl_FragColor.a = step(0.93, noise(vUv * 6000.0));
}