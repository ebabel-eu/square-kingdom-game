import { FogExp2, PCFSoftShadowMap } from 'three';

import * as C from '../../constants';
import { OnWindowResize } from './on-window-resize';

export const Init = (scene, renderer, camera, light, stats) => {
  scene.fog = new FogExp2(C.FOG_COLOR, C.FOG_DENSITY);

  renderer.setClearColor(scene.fog.color);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  const container = document.getElementById('container');
  container.appendChild(renderer.domElement);

  camera.position.set(
    C.CAMERA_POSITION.X,
    C.CAMERA_POSITION.Y,
    C.CAMERA_POSITION.Z,
  );

  // Light.
  light.position.set(
    C.LIGHT_POSITION.X,
    C.LIGHT_POSITION.Y,
    C.LIGHT_POSITION.Z,
  );
  light.castShadow = true;
  light.angle = C.LIGHT_ANGLE;
  light.penumbra = 0.39;
  light.decay = 2;
  light.distance = 200;
  light.shadow.mapSize.width = 1024;
  light.shadow.mapSize.height = 1024;
  light.shadow.camera.near = 1;
  light.shadow.camera.far = 200;
  scene.add(light);

  // Enable shadow rendering.
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = PCFSoftShadowMap;

  // Stats.
  container.appendChild(stats.dom);

  // Handle windows resize.
  window.addEventListener('resize', () => OnWindowResize(camera, renderer), false);
};
