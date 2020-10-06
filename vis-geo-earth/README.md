# 3D 地球可视化组件

## 安装

组件依赖[spritejs@3](https://github.com/spritejs/spritejs)和[sprite-extend-3d](https://github.com/spritejs/sprite-extend-3d)，浏览器中使用时，可以通过CDN加载相关的依赖库。

```html
  <script src="http://unpkg.com/spritejs/dist/spritejs.js"></script>
  <script src="http://unpkg.com/sprite-extend-3d/dist/sprite-extend-3d.js"></script>
  <script src="js/sprite-geo-earth.min.js"></script>
```

## 使用

如果通过CDN加载，那么组件的所有API被导出到`spritejs.globe`对象中，可以直接通过该对象引入：

```html
<script>
const {Scene} = spritejs;
const container = document.getElementById('container');
const scene = new Scene({
  container,
});
const layer = scene.layer3d('fglayer', {
  alpha: false,
  camera: {
    fov: 35,
  },
});
layer.camera.attributes.pos = [0, 0, 3500 / Math.min(layer.width, layer.height)];
layer.camera.lookAt([0, 0, 0]);
layer.gl.clearColor(0, 0, 0, 1);

const {createGlobe} = spritejs.globe;

// 创建地球
const globe = createGlobe(layer, {
  program: null, // 这里有特殊需要可以传一个自定义的program进去，不过一般不需要
  data: spritejs.globe.config.topojsonData, // 数据源，默认是测试数据源，可以传任何topojson格式的世界地理数据覆盖它
  orbit: true, // 是否允许鼠标操作，默认为 true
  raycast: true, // 是否允许地球被点击，默认为 false
  highlight: true, // 是否让鼠标移动时高亮地区，这个需要同时将raycast设为true生效
  sky: true, // 是否显示星空，默认为true
  skyProgram: null, // 如果自定义背景天空，可以传一个program进去
  corona: true, // 是否显示地球背景的光晕，默认为true
  coronaProgram: null, // 如果自定义背景光晕，可以传一个program进去
  autoResize: true, // 是否在容器大小变化时自适应大小
  texture: null, // 是否加载地图纹理，默认不加载则用数据画
  tick() { // 可以在每一帧更新地球属性
    this.attributes.rotateY += 0.1;
  },
  // ... 然后可以传其他的SpriteJS属性给元素
  rotateY: 310,
});
</script>
```

如果用QNPM安装的，那么可以用模块引入：

```js
// 创建 spritejs 的 Scene 和 Layer
import {Scene} from 'spritejs';
const container = document.getElementById('container');
const scene = new Scene({
  container,
});
const layer = scene.layer3d('fglayer', {
  alpha: false,
  camera: {
    fov: 35,
  },
});
layer.camera.attributes.pos = [0, 0, 3500 / Math.min(layer.width, layer.height)];
layer.camera.lookAt([0, 0, 0]);
layer.gl.clearColor(0, 0, 0, 1);

import {createGlobe} from '@q/sprite-geo-earth';

// 后面使用是一样的
...
```

这样就创建了一个可交互的地球。

![](https://p3.ssl.qhimg.com/t019011503997b9c344.jpg)

## API

### addBeam

##### addBeam(globe, options) 在地球上添加一个光柱

| 参数 | 类型 | 必填/默认值 | 说明 |
| --- | --- | --- | --- |
| latitude | number | required | 北纬，负数为南纬，范围 -90~90 |
| longitude | number | required | 东经，负数为西经，范围 -180~180 |
| width | number | 1.0 | 相对宽度 |
| height | number | 25.0 | 相对高度 |
| color | Color | rgba(245,250,113, 0.5) | 光柱颜色 |
| raycast | 枚举 {none, bounds, sphere} | none | 是否碰撞检测，默认不检测 |
| segments | number | 60 | 柱子截面的边数，越多越接近圆柱，3为三棱柱 |


### createCurve

##### addCurve(globe, options) 在地球上添加一段曲线

| 参数 | 类型 | 必填/默认值 | 说明 |
| --- | --- | --- | --- |
| from | {latitude, longitude} | required | 起始位置 |
| to | {latitude, longitude} | required | 结束位置 |
| color | Color | rgb(232,22,140) | 曲线颜色 |
| thickness | number | 1.0 | 相对宽度 |
| height | number | 1.0 | 相对高度 |
| dashLength | number | 10e6 | 虚线长度 |
| dashOffset | number | 0 | 虚线偏移量 |


### addMarker

##### addMarker(globe, options) 在地球上添加一个标记

| 参数 | 类型 | 必填/默认值 | 说明 |
| --- | --- | --- | --- |
| latitude | number | required | 北纬，负数为南纬，范围 -90~90 |
| longitude | number | required | 东经，负数为西经，范围 -180~180 |
| width | number | 1.0 | 相对宽度 |
| height | number | 0.0 | 相对高度, 0 表示在平面上 |
| speed | number | 1.0 | 光圈闪烁的相对速度 |
| color | Color | rgba(245,250,113) | 标记颜色 |
| raycast | 枚举 {none, bounds, sphere} | none | 是否碰撞检测，默认不检测 |
| segments | number | 60 | 标记截面的边数，越多越接近圆，3为三角形 |
| lifeTime | number | Infinity | 标记的生命周期，默认永久，可以设置为毫秒值 |


### cameraTo

##### cameraTo(globe, options) 移动相机到某个位置

| 参数 | 类型 | 必填/默认值 | 说明 |
| --- | --- | --- | --- |
| latitude | number | required | 北纬，负数为南纬，范围 -90~90 |
| longitude | number | required | 东经，负数为西经，范围 -180~180 |
| to | Vec3 | null | 如果不传 latitude 和 longitude，直接传to坐标，则按照to坐标移动相机 |
| duration | number | 500 | 执行移动的动画 |


### createGlobe

##### createGlobe(layer, options) 创建地球

| 参数 | 类型 | 必填/默认值 | 说明 |
| --- | --- | --- | --- |
| program | Program | null | 可以传自定义program |
| data | string | default | 可以传一个 URL，是 topojson 数据的地址 |
| orbit | boolean | true | 是否允许鼠标控制 |
| raycast | boolean | false | 是否碰撞检测，如果要高亮地区，需要将它设为 true |
| highlight | boolean | false | 是否高亮显示地区 |
| tick | Function | null | layer.tick 的简写 |
| sky | boolean | true | 是否显示星空背景 |
| skyProgram | Program | null | 星空背景自定义program |
| corona | boolean | true | 是否显示背景光晕 |
| coronaProgram | Program | null | 背景光晕自定义program |
| autoResize | boolean | true | 是否根据窗口缩放自动适配 |
| texture | Texture | null | 加载纹理图片 |


### getCountryInfo(globe, options) 获取指定位置的国家/地区信息

| 参数 | 类型 | 必填/默认值 | 说明 |
| --- | --- | --- | --- |
| latitude | number | required | 北纬，负数为南纬，范围 -90~90 |
| longitude | number | required | 东经，负数为西经，范围 -180~180 |
| pos | Vec3 | null | 如果不传 latitude 和 longitude，直接传pos坐标，则按照pos坐标判断地区 |

返回topojson的feature数据。

### highlightMap

##### highlightMap(globe, options) 高亮地图区域

我们可以不设置globe的highlight属性，自己接管地图的高亮。

| 参数 | 类型 | 必填/默认值 | 说明 |
| --- | --- | --- | --- |
| latitude | number | required | 北纬，负数为南纬，范围 -90~90 |
| longitude | number | required | 东经，负数为西经，范围 -180~180 |
| pos | Vec3 | null | 如果不传 latitude 和 longitude，直接传pos坐标，则按照pos坐标高亮地区 |

### latlngToPosition

##### latlngToPosition(latitude, longitude, radius = 1) 经纬度转3D坐标

辅助函数，将经纬度转换为地球的3D坐标。

### launchMissile

##### launchMissile(globe, options) 发射飞线

| 参数 | 类型 | 必填/默认值 | 说明 |
| --- | --- | --- | --- |
| from | {latitude, longitude} | required | 起始位置 |
| to | {latitude, longitude} | required | 结束位置 |
| color | Color | rgb(232,22,140) | 曲线颜色 |
| thickness | number | 1.0 | 相对宽度 |
| height | number | 1.0 | 相对高度 |
| lifeTime | number | 1000 | 飞线飞行时间 |


### project

##### project(u, v radius = 1) 将平面地图点投影到地球3D坐标

辅助函数，将平面地图点投影到地球3D坐标

### positionToLatlng

##### positionToLatlng(x, y, z, radius = 1) 将3D地球坐标转换为经纬度

辅助函数，将3D地球坐标转换为经纬度

### unproject

##### unproject(x, y, z, radius = 1) 将3D地球坐标投影到平面地图点

辅助函数，将3D地球坐标投影到平面地图点
