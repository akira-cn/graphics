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
  rotateY: 150,
});