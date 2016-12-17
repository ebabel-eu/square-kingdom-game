import { Vector2 } from 'three';

import { OnMouseMove } from './on-mouse-move';

export default class MouseControl {
  constructor() {
    this.mouse = new Vector2();

    // Handle mouse move (debounced).
    window.addEventListener('mousemove', event => OnMouseMove(event, this.mouse), false);
  }
}
