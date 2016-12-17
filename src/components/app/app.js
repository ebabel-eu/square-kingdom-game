import React, { Component } from 'react';
import { PerspectiveCamera, Scene, WebGLRenderer, SpotLight } from 'three';

import * as C from '../../constants';
import { Init } from './init';
import { LoadModels } from './load-models';
import { Gui } from '../gui/gui';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.stats = (C.DEBUG) ? new Stats() : undefined;
    this.camera =  new PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
    this.scene = new Scene();
    this.renderer = new WebGLRenderer();

    this.light = new SpotLight(C.LIGHT_COLOR, C.LIGHT_INTENSITY);

    this.animate = this.animate.bind(this);
  }

  threeRender() {
    this.renderer.render(this.scene, this.camera);
  }

  animate() {
    requestAnimationFrame(this.animate);

    if (this.stats) {
      this.stats.update();
    }

    this.threeRender();
  }

  componentDidMount() {
    Init(this.scene, this.renderer, this.camera, this.light, this.stats);

    LoadModels(this.scene);

    this.animate();

    if (C.DEBUG) {
      Gui(this.scene, this.light);
    }
  }

  render() {
    return (
      <div id="container" className="disable-select" />
    );
  }
}
