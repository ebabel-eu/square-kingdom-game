import * as C from '../constants';

const updateMaterial = (intersected, hexColor) => {
  intersected.material.color.setHex(hexColor);
};

export const Rollover = (mouseControl, camera, raycaster, scene, intersected) => {
  mouseControl.shouldRollover = false; // Reset the rollover.

  raycaster.setFromCamera(mouseControl.mouse, camera);

  const intersects = raycaster.intersectObjects(scene.children);

  // Raycaster has found something but nothing is tracked by "intersected".
  if (intersects.length > 0 && intersected === undefined) {
    intersected = intersects[0].object;
    intersected.currentHex = intersected.material.color.getHex();
    updateMaterial(intersected, C.HIGHLIGHT);
    console.log(intersected);
  }

  // Raycaster has found something and there is an object tracked by "intersected".
  if (intersects.length > 0 && intersected
      && intersected.uuid !== intersects[0].object.uuid) {
    updateMaterial(intersected, intersected.currentHex);
  }
};
