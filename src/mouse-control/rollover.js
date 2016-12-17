import * as C from '../constants';

const changeMaterial = intersects => intersects.map(intersect => {
  intersect.object.material.emissive.setHex(C.HIGHLIGHT);
});

export const Rollover = (mouseControl, camera, raycaster, scene) => {
  mouseControl.shouldRollover = false; // Reset the rollover.

  raycaster.setFromCamera(mouseControl.mouse, camera);

  const intersects = raycaster.intersectObjects(scene.children);

  if (intersects && intersects.length > 0) {
    changeMaterial(intersects);
  }
};
