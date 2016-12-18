import { Vector2 } from 'three';

import { OnMouseMove } from './on-mouse-move';
import { Rollover } from './rollover';

export default class MouseControl {
  constructor() {
    this.rollover = Rollover;

    this.mouse = new Vector2();

    // Flag to indicate if a rollover effect should be displayed.
    this.shouldRollover = false;

    // Handle mouse move (debounced).
    window.addEventListener('mousemove', event => OnMouseMove(event, this), false);
  }
}
