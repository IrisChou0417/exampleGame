// 资源文件加载器 , 确保canvas在图片资源加载完成后才进行渲染
import {Resources} from "./Resources.js";

export class ResourceLoader {
  constructor() {
    this.map = new Map(Resources);
    for (let [key,value] of this.map) {
      const image = new Image();
      image.src = value;
      this.map.set(key, image);
      //循环走完之后，每个 key 对应一个 image 对象
    }
  }

  //加载全部结束的方法
  onLoaded(callback) {
    let loadedCount = 0;      //记录加载的个数
    for (let value of this.map.values()) {
      value.onload = () =>{
        loadedCount++;
        if(loadedCount>=this.map.size){
          callback(this.map);
        }
      }
    }
  }
  // 用工厂模式 创建一个简单工厂
  static create() {
    return new ResourceLoader();
  }
}
