precision highp float;
precision highp int;

varying vec3 vNormal;
varying vec4 vColor;

uniform vec4 directionalLight; //平行光 xyz - 向量位置, w - 强度

void main() {
  float light = dot(vNormal, normalize(directionalLight.xyz));
  gl_FragColor.rgb = vColor.rgb + light * directionalLight.w;
  gl_FragColor.a = vColor.a;
}