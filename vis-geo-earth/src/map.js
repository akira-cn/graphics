// topojson 地图相关的辅助类
import {feature} from 'topojson';
import {geoPath, geoEquirectangular, geoContains} from 'd3-geo';
import {Vec3} from 'sprite-extend-3d';
import config from './config';

if(typeof OffscreenCanvas !== 'function') {
  // firefox polyfill
  window.OffscreenCanvas = function (width, height) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    canvas.transferToImageBitmap = function () {
      const ctx = canvas.cloneNode().getContext('2d');
      ctx.translate(0, canvas.height);
      ctx.scale(1, -1);
      ctx.drawImage(canvas, 0, 0);
      return ctx.canvas;
    };
    return canvas;
  };
}

let _context,
  _countries,
  _projection,
  _bitmap;

const mapWidth = 960;
const mapHeight = 480;
const mapScale = 4;

function drawMap({
  context = _context,
  countries = _countries,
  projection = _projection,
  strokeColor = '#666',
  fillColor = '#000',
  strokeWidth = 1.5,
} = {}) {
  _context = context;
  _countries = countries;
  _projection = projection;

  const path = geoPath(projection).context(context);

  context.save();
  context.translate(0, mapScale * mapHeight);
  context.scale(1, -1);
  context.strokeStyle = strokeColor;
  context.lineWidth = strokeWidth;
  context.fillStyle = fillColor;
  context.beginPath();
  path(countries);
  context.fill();
  context.stroke();
  context.restore();

  _bitmap = context.canvas.transferToImageBitmap();
  _bitmap.originalMap = true;
  return _bitmap;
}

// 默认宽高 960 X 500，默认 translate 是 480 X 250
export const projection = geoEquirectangular();
projection.scale(projection.scale() * mapScale).translate([mapWidth * mapScale * 0.5, (mapHeight + 2) * mapScale * 0.5]);

export async function loadMap(src = config.topojsonData, {strokeColor, fillColor} = {}) {
  const data = await (await fetch(src)).json();
  const countries = feature(data, data.objects.countries);
  const canvas = new OffscreenCanvas(mapScale * mapWidth, mapScale * mapHeight);
  const context = canvas.getContext('2d');
  context.imageSmoothingEnabled = false;

  return drawMap({context, countries, projection, strokeColor, fillColor});
}

/**
 * 将平面地图坐标转换为球面坐标
 * @param {*} u
 * @param {*} v
 * @param {*} radius
 */
export function project(u, v, radius = 1) {
  u /= mapScale * mapWidth;
  v /= mapScale * mapHeight;
  const pLength = Math.PI * 2;
  const tLength = Math.PI;
  const x = -radius * Math.cos(u * pLength) * Math.sin(v * tLength);
  const y = radius * Math.cos(v * tLength);
  const z = radius * Math.sin(u * pLength) * Math.sin(v * tLength);
  return new Vec3(x, y, z);
}

/**
 * 将球面坐标转换为平面地图坐标
 * @param {*} x
 * @param {*} y
 * @param {*} z
 * @param {*} radius
 */
export function unproject(x, y, z, radius = 1) {
  const pLength = Math.PI * 2;
  const tLength = Math.PI;
  const v = Math.acos(y / radius) / tLength; // const y = radius * Math.cos(v * tLength);
  let u = Math.atan2(-z, x) + Math.PI; // z / x = -1 * Math.tan(u * pLength);
  u /= pLength;
  return [u * mapScale * mapWidth, v * mapScale * mapHeight];
}

/**
 * 将经纬度转换为球面坐标
 * @param {*} latitude
 * @param {*} longitude
 * @param {*} radius
 */
export function latlngToPosition(latitude, longitude, radius = 1) {
  const [u, v] = projection([longitude, latitude]);
  return project(u, v, radius);
}

export function positionToLatlng(x, y, z, radius = 1) {
  const [u, v] = unproject(x, y, z, radius);
  return projection.invert([u, v]);
}

let highlightMapContxt = null;
let lastIndex = -1;

function updateGlobeTexture(globe, image) {
  if(image) {
    const texture = globe.program.uniforms.tMap.value;
    const previousImage = texture.image;
    texture.image = image;
    if(previousImage.close && !previousImage.originalMap) {
      previousImage.close(); // close imageBitmap to prevent memory leak.
    }
    texture.needsUpdate = true;
  }
}

export function getCountryInfo(globe, {pos, latitude, longitude, countries = _countries} = {}) {
  if(latitude == null || longitude == null) {
    const [u, v] = unproject(...pos, globe.attributes.radius);
    [longitude, latitude] = projection.invert([u, v]);
  }
  if(!countries) return {index: -1};
  let idx = -1;
  countries.features.some((d, i) => {
    const ret = geoContains(d, [longitude, latitude]);
    if(ret) idx = i;
    return ret;
  });
  const info = idx >= 0 ? {...countries.features[idx]} : {};
  info.index = idx;
  return info;
}

export function highlightMap(globe, {pos, latitude, longitude, bitmap = _bitmap, countries = _countries} = {}) {
  if(!countries) return {image: null, index: -1};

  const info = getCountryInfo(globe, {pos, latitude, longitude, countries});
  const idx = info.index;

  if(idx === lastIndex) {
    bitmap = null;
  } else {
    lastIndex = idx;
    if(idx > 0) {
      if(!highlightMapContxt) {
        const canvas = new OffscreenCanvas(mapScale * mapWidth, mapScale * mapHeight);
        highlightMapContxt = canvas.getContext('2d');
      }
      const path = geoPath(projection).context(highlightMapContxt);
      highlightMapContxt.clearRect(0, 0, mapScale * mapWidth, mapScale * mapHeight);
      highlightMapContxt.drawImage(bitmap, 0, 0);
      highlightMapContxt.save();
      highlightMapContxt.translate(0, mapScale * mapHeight);
      highlightMapContxt.scale(1, -1);
      highlightMapContxt.fillStyle = '#fff';
      highlightMapContxt.beginPath();
      path({type: 'FeatureCollection', features: countries.features.slice(idx, idx + 1)});
      highlightMapContxt.fill();
      highlightMapContxt.restore();
      bitmap = highlightMapContxt.canvas.transferToImageBitmap();
    }
    updateGlobeTexture(globe, bitmap);
  }
  return {image: bitmap, index: idx};
}