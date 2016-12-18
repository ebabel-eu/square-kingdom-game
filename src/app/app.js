import { PerspectiveCamera, Scene, WebGLRenderer, Raycaster, SpotLight } from 'three';

import * as C from '../constants';
import { Init } from './init';
import { LoadModels } from './load-models';
import { Gui } from '../gui/gui';
import MouseControl from '../mouse-control/mouse-control';

export default class App {
  constructor() {
    this.stats = (C.DEBUG) ? new Stats() : undefined;
    this.camera =  new PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
    this.scene = new Scene();
    this.renderer = new WebGLRenderer({ alpha: true });
    this.raycaster = new Raycaster();

    this.light = new SpotLight(C.LIGHT_COLOR, C.LIGHT_INTENSITY);

    this.mouseControl = new MouseControl();

    this.animate = this.animate.bind(this);
  }

  start() {
    Init(this.scene, this.renderer, this.camera, this.light, this.stats);

    LoadModels(this.scene);

    this.animate();

    if (C.DEBUG) {
      Gui(this.scene, this.light);
    }
  }

  render() {
    this.renderer.render(this.scene, this.camera);

    if (this.mouseControl.shouldRollover) {
      this.mouseControl.rollover(this.mouseControl, this.camera, this.raycaster, this.scene);
    }
  }

  animate() {
    requestAnimationFrame(this.animate);

    if (this.stats) {
      this.stats.update();
    }

    this.render();
  }
}
