import {ResourceLoader} from './js/base/ResourceLoader.js'
import {Sprite} from './js/base/Sprite.js'
import {Land} from './js/runtime/Land.js'
import {BackGround} from './js/runtime/BackGround.js'
import {DataStore} from './js/base/DataStore.js'
import {Director} from './js/Director.js'
import {Birds} from './js/player/Birds.js'
import {Score} from './js/player/score.js'
import {StartButton} from './js/player/startButton.js'


export class Main {
  constructor () {
    this.canvas = document.getElementById('game_canvas');
    this.ctx = this.canvas.getContext('2d');
    this.dataStore = DataStore.getInstance();
    this.director = Director.getInstance();
    const loader = ResourceLoader.create();
    loader.onLoaded(map => this.onResourceFirstLoader(map))

  }

  onResourceFirstLoader (map) {
    this.dataStore.ctx = this.ctx;
    this.dataStore.res = map;
    this.init();

  }

  init() {
    this.director.isGameOver = false;
    this.dataStore
        .put('pencils', [])
        .put('background', BackGround)
        .put('land', Land)
        .put('birds', Birds)
        .put('score', Score)
        .put('startButton', StartButton);
    this.registerEvent();
    this.director.createPencil();
    this.director.run();
  }

  registerEvent () {
    this.canvas.addEventListener('touchstart', e => {
      e.preventDefault();
      if(this.director.isGameOver){
        this.init();
      } else {
        this.director.birdsEvent();
      }
    });
  }
}
