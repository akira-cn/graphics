precision highp float;
precision highp int;

attribute vec3 position;
attribute vec3 normal;
attribute vec4 color;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat3 normalMatrix;

varying vec3 vNormal;
varying vec4 vColor;

uniform vec3 pointLightPosition; //点光源位置
uniform vec4 pointLightColor; // 点光源颜色
uniform vec4 ambientColor; // 环境光
uniform float uHeight;

void main() {
  vNormal = normalize(normalMatrix * normal);

  vec3 dir = normalize(pointLightPosition - position);// 计算点光源入射光线反方向并归一化
  float cos = max(dot(dir, vNormal), 0.0);// 计算入射角余弦值
  vec3 diffuse = pointLightColor.rgb * color.rgb * pointLightColor.a * cos;// 计算点光源漫反射颜色
  vec3 ambient = ambientColor.rgb * color.rgb;// 计算环境光反射颜色
  
  float height = 0.5 - position.z / uHeight;

  vColor = vec4(diffuse + ambient + 0.3 * sin(height), color.a * height);
  // vColor = color;

  vec3 P = position;
  P.xy *= 2.0 - pow(height, 3.0);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(P, 1.0);
}