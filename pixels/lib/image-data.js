const _data = Symbol('data');

export default class ImageData {
  constructor(image, rect = [0, 0, image.width, image.height]) {
    const canvas = new OffscreenCanvas(image.width, image.height);
    const context = canvas.getContext('2d');
    context.drawImage(image, 0, 0);
    const imgData = context.getImageData(...rect);
    this[_data] = imgData;
  }

  get data() {
    return this[_data].data;
  }

  get width() {
    return this[_data].width;
  }

  get height() {
    return this[_data].height;
  }

  getPixel(x, y) {
    const {width, height, data} = this;
    if(x < 0 || y < 0 || x >= width || y >= height) {
      return null;
    }
    const idx = 4 * (y * width + x);
    const r = data[idx] / 255,
      g = data[idx + 1] / 255,
      b = data[idx + 2] / 255,
      a = data[idx + 3] / 255;
    return [r, g, b, a];
  }

  * getPixelsByRow(y) {
    const {width, height} = this;
    if(y < 0 || y >= height) return null;

    for(let i = 0; i < width; i++) {
      yield this.getPixel(i, y);
    }
  }

  * getPixelsByCol(x) {
    const {width, height} = this;
    if(x < 0 || x >= width) return null;
    for(let j = 0; j < height; j++) {
      yield this.getPixel(x, j);
    }
  }
}