export const OnMouseMove = (event, mouseControl) => {
  event.preventDefault();

  mouseControl.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouseControl.mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

  mouseControl.shouldRollover = true;
};
