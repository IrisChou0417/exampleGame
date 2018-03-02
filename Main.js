import {ResourceLoader} from './js/base/ResourceLoader.js';
import {DataStore} from './js/base/DataStore.js';
import {Director} from './js/Director.js';
import {BackGround} from './js/runtime/BackGround.js';
import {Land} from './js/runtime/Land.js';

export class Main {
  constructor() {
    this.canvas = document.getElementById('game_canvas');
    this.ctx = this.canvas.getContext('2d');
    this.dataStore = DataStore.getInstance();
    this.director = Director.getInstance();
    const loader = ResourceLoader.create();   //确保图片能渲染完成
    loader.onLoaded(map => this.onResourceFirstLoaded(map))

  }
  //资源第一次加载时
  onResourceFirstLoaded (map) {
    this.dataStore.ctx = this.ctx;
    this.dataStore.res = map;
    this.init();
  }

  //初始化
  init(){
    this.dataStore.put('background', BackGround)
                  .put('land', Land);
    this.director.run();
  }
}
