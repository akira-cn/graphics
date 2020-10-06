precision highp float;
precision highp int;

varying vec3 vNormal;
varying vec4 vColor;

uniform vec4 directionalLight; //平行光

uniform sampler2D tMap;
uniform sampler2D tMapSkin;
varying vec2 vUv;

varying float fCos;

uniform vec4 pointLightColor; // 点光源颜色
uniform vec4 ambientColor; // 环境光

uniform vec2 uResolution;
uniform bool highlight;

void main() {
  vec4 color = vColor;
  vec4 texColor = texture2D(tMapSkin, vUv);
  vec4 bgColor = texture2D(tMap, vUv);

  vec2 st = gl_FragCoord.xy / uResolution;

  vec3 light = normalize(directionalLight.xyz);
  float shading = dot(vNormal, light) * directionalLight.w;

  float alpha = texColor.a;
  if(highlight) alpha *= mix(0.5, 1.0, bgColor.r);
  color.rgb = mix(color.rgb, texColor.rgb, alpha);
  color.rgb = mix(texColor.rgb, color.rgb, clamp(color.a / max(0.0001, texColor.a), 0.0, 1.0));
  color.a = texColor.a + (1.0 - texColor.a) * color.a;

  vec3 diffuse = pointLightColor.rgb * color.rgb * pointLightColor.a * fCos;// 计算点光源漫反射颜色
  vec3 ambient = ambientColor.rgb * color.rgb;// 计算环境光反射颜色

  color = vec4(diffuse + ambient, color.a);

  float d = distance(st, vec2(0.5));

  gl_FragColor.rgb = color.rgb + shading + 0.3 * pow((1.0 - d), 3.0);
  gl_FragColor.a = color.a;
} 