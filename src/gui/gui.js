import * as C from '../constants';
import { clear } from './clear';
import { updateLightColor } from './update-light-color';
import { updateLight } from './update-light';

export const Gui = (scene, light, gui) => {
  gui = clear(gui);

  const lightFolder = gui.addFolder('Light');

  const lightController = {
    color: light.color.getHex(),
    intensity: light.intensity,
    distance: light.distance,
    decay: light.decay,
    positionX: light.position.x,
    positionY: light.position.y,
    positionZ: light.position.z,
  };

  lightFolder
    .addColor(lightController, 'color', C.LIGHT_COLOR)
    .name('Color')
    .onChange(input => updateLightColor(light, input));

  lightFolder
    .add(lightController, 'intensity',
      C.GUI.LIGHT_INTENSITY.MIN,
      C.GUI.LIGHT_INTENSITY.MAX,
      C.GUI.LIGHT_INTENSITY.STEP)
    .name('Intensity')
    .onChange(input => updateLight(light, input, 'intensity'));

  lightFolder
    .add(lightController, 'positionX',
      C.GUI.LIGHT_POSITION_X.MIN,
      C.GUI.LIGHT_POSITION_X.MAX,
      C.GUI.LIGHT_POSITION_X.STEP)
    .name('x')
    .onChange(input => updateLight(light.position, input, 'x'));

  lightFolder
    .add(lightController, 'positionY',
      C.GUI.LIGHT_POSITION_Y.MIN,
      C.GUI.LIGHT_POSITION_Y.MAX,
      C.GUI.LIGHT_POSITION_Y.STEP)
    .name('y')
    .onChange(input => updateLight(light.position, input, 'y'));

  lightFolder
    .add(lightController, 'positionZ',
      C.GUI.LIGHT_POSITION_Z.MIN,
      C.GUI.LIGHT_POSITION_Z.MAX,
      C.GUI.LIGHT_POSITION_Z.STEP)
    .name('z')
    .onChange(input => updateLight(light.position, input, 'z'));
};
