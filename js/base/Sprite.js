//精灵的基类，负责初始化精灵加载的资源和大小以及位置
import {DataStore} from './DataStore.js';


export class Sprite {
  /*
    第 1 个参数：
    第 2 个参数：要绘制的图片对象
    第 3 个参数：图片剪裁的X坐标
    第 4 个参数：图片剪裁的Y坐标
    第 5 个参数：图片剪裁的宽度
    第 6 个参数：图片剪裁的高度
    第 7 个参数：图形资源在Canvas上的位置，X轴
    第 8 个参数：图形资源在Canvas上的位置，Y轴
    第 9 个参数：剪裁后要使用的图片大小，宽
    第 10 个参数：剪裁后要使用的图片大小，高
  */
  constructor(img = null, srcX = 0, srcY = 0, srcW = 0, srcH = 0, x = 0, y = 0, width = 0, height = 0 ){
    this.dataStore = DataStore.getInstance();
    this.ctx = this.dataStore.ctx;
    this.img = img;
    this.srcX = srcX;
    this.srcY = srcY,
    this.srcW = srcW;
    this.srcH = srcH;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  static getImage (key) {
    return DataStore.getInstance().res.get(key);
  }
  draw(img = this.img,
      srcX = this.srcX, srcY = this.srcY,
      srcW = this.srcW, srcH = this.srcH,
      x = this.x, y = this.y,
      width = this.width, height = this.height)
      {
        this.ctx.drawImage(
        img,
        srcX,
        srcY,
        srcW,
        srcH,
        x,
        y,
        width,
        height
    )
  }
}
