import debounce from 'lodash.debounce';

import * as C from '../../constants';

export const OnMouseMove = debounce((event, mouse) => {
  event.preventDefault();

  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

  console.log(`x: ${mouse.x} y: ${mouse.y}`);
}, C.DEBOUNCE);
