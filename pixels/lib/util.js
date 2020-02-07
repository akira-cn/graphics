export function loadImage(src) {
  const img = new Image();
  img.crossOrigin = 'anonymous';
  return new Promise((resolve) => {
    img.onload = () => {
      resolve(img);
    };
    img.src = src;
  });
}

const imageDataContext = new WeakMap();

export function getImageData(img, rect = [0, 0, img.width, img.height]) {
  let context;
  if(imageDataContext.has(img)) context = imageDataContext.get(img);
  else {
    const canvas = new OffscreenCanvas(img.width, img.height);
    context = canvas.getContext('2d');
    context.drawImage(img, 0, 0);
    imageDataContext.set(img, context);
  }
  return context.getImageData(...rect);
}

export function getPixel(imageData, index) {
  const {data} = imageData;
  const r = data[index] / 255,
    g = data[index + 1] / 255,
    b = data[index + 2] / 255,
    a = data[index + 3] / 255;
  return [r, g, b, a];
}

export function getPixelXY(imgData, x, y) {
  const {width, height} = imgData;
  if(x < 0 || y < 0 || x >= 1 || y >= 1) {
    return null;
  }
  x = Math.floor(width * x);
  y = Math.floor(height * y);
  const idx = 4 * (y * width + x);
  return getPixel(imgData, idx);
}

export function transferToImageBitmap(imageData) {
  const canvas = new OffscreenCanvas(imageData.width, imageData.height);
  const context = canvas.getContext('2d');
  context.putImageData(imageData, 0, 0);
  return canvas.transferToImageBitmap();
}

export function traverse(imageData, pass) {
  const {width, height, data} = imageData;
  for(let i = 0; i < width * height * 4; i += 4) {
    const [r, g, b, a] = pass({
      r: data[i] / 255,
      g: data[i + 1] / 255,
      b: data[i + 2] / 255,
      a: data[i + 3] / 255,
      index: i,
      width,
      height,
      x: ((i / 4) % width) / width,
      y: Math.floor(i / 4 / width) / height});
    data.set([r, g, b, a].map(v => Math.round(v * 255)), i);
  }
  return imageData;
}

function gaussianMatrix(radius, sigma = radius / 3) {
  const a = 1 / (Math.sqrt(2 * Math.PI) * sigma);
  const b = -1 / (2 * sigma ** 2);
  let sum = 0;
  const matrix = [];
  for(let x = -radius; x <= radius; x++) {
    const g = a * Math.exp(b * x ** 2);
    matrix.push(g);
    sum += g;
  }

  for(let i = 0, len = matrix.length; i < len; i++) {
    matrix[i] /= sum;
  }
  return {matrix, sum};
}


/**
  * 高斯模糊
  * @param  {Array} pixes  pix array
  * @param  {Number} width 图片的宽度
  * @param  {Number} height 图片的高度
  * @param  {Number} radius 取样区域半径, 正数, 可选, 默认为 3.0
  * @param  {Number} sigma 标准方差, 可选, 默认取值为 radius / 3
  * @return {Array}
  */
export function gaussianBlur(pixels, width, height, radius = 3, sigma = radius / 3) {
  const {matrix, sum} = gaussianMatrix(radius, sigma);
  // x 方向一维高斯运算
  for(let y = 0; y < height; y++) {
    for(let x = 0; x < width; x++) {
      let r = 0,
        g = 0,
        b = 0;

      for(let j = -radius; j <= radius; j++) {
        const k = x + j;
        if(k >= 0 && k < width) {
          const i = (y * width + k) * 4;
          r += pixels[i] * matrix[j + radius];
          g += pixels[i + 1] * matrix[j + radius];
          b += pixels[i + 2] * matrix[j + radius];
        }
      }
      const i = (y * width + x) * 4;
      // 除以 sum 是为了消除处于边缘的像素, 高斯运算不足的问题
      pixels[i] = r / sum;
      pixels[i + 1] = g / sum;
      pixels[i + 2] = b / sum;
    }
  }

  // y 方向一维高斯运算
  for(let x = 0; x < width; x++) {
    for(let y = 0; y < height; y++) {
      let r = 0,
        g = 0,
        b = 0;

      for(let j = -radius; j <= radius; j++) {
        const k = y + j;
        if(k >= 0 && k < height) {
          const i = (k * width + x) * 4;
          r += pixels[i] * matrix[j + radius];
          g += pixels[i + 1] * matrix[j + radius];
          b += pixels[i + 2] * matrix[j + radius];
        }
      }
      const i = (y * width + x) * 4;
      pixels[i] = r / sum;
      pixels[i + 1] = g / sum;
      pixels[i + 2] = b / sum;
    }
  }
  return pixels;
}