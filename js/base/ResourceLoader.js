//资源文件加载器, 确保canvas加载完后再进行渲染
import {Resources} from './Resources.js';

export class ResourceLoader {
  constructor () {
    this.map = new Map(Resources);
    for(let [key, value] of this.map) {
      const image = new Image();
      image.src = value;
      this.map.set(key, image);
    }
  }
  onLoaded (callback) { 
    let loadedCount = 0;
    for (let value of this.map.values()) {
      value.onload = () => {
        loadedCount++;
        if(loadedCount>=this.map.size) {
          callback(this.map);
        }
      }
    }
  }
  static create () {
    return new ResourceLoader();
  }
}
