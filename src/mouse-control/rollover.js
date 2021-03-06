import * as C from '../constants';

let intersected = undefined;

const updateMaterial = (intersected, hexColor) => {
  intersected.material.color.setHex(hexColor);
};

const updateIntersected = object => {
  intersected = object;
  intersected.currentHex = intersected.material.color.getHex();
  updateMaterial(intersected, C.HIGHLIGHT);
};

export const Rollover = (mouseControl, camera, raycaster, scene) => {
  mouseControl.shouldRollover = false; // Reset the rollover.

  raycaster.setFromCamera(mouseControl.mouse, camera);

  const intersects = raycaster.intersectObjects(scene.children);

  // Raycaster has found something but nothing is tracked by "intersected".
  if (intersects.length > 0 && intersected === undefined) {
    updateIntersected(intersects[0].object);
  }

  // There is an object tracked by "intersected" and it is not the one found by the raycaster.
  if (intersects.length > 0 && intersected
      && intersected.uuid !== intersects[0].object.uuid) {
    updateMaterial(intersected, intersected.currentHex);
    updateIntersected(intersects[0].object);
  }
};
