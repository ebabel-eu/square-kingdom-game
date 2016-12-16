// Define the whole color scheme in this one place.
export const COLORS = {
  WHITE: 0xFFFFFF,
  BLACK: 0x000000,
  GREY: 0xCCCCCC,
  GREEN: 0x00FF00,
  RED: 0xFF0000,
};

// Light.
export const LIGHT_COLOR = COLORS.WHITE;
export const LIGHT_INTENSITY = 0.88;
export const LIGHT_ANGLE = Math.PI / 4;
export const LIGHT_POSITION = {
  X: 3,
  Y: 3,
  Z: 1,
};

// Fog.
export const FOG_COLOR = COLORS.GREY;
export const FOG_DENSITY = 0.05;

// Camera.
export const CAMERA_POSITION = {
  X: 0,
  Y: 0,
  Z: 6,
};

// Square.
export const PLAYER_SQUARE_COLOR = COLORS.GREEN;
export const ENEMY_SQUARE_COLOR = COLORS.RED;
export const NEUTRAL_SQUARE_COLOR = COLORS.GREY;

// GUI.
export const GUI = {
  LIGHT_INTENSITY: {
    MIN: 0.5,
    MAX: 1.5,
    STEP: 0.01,
  },
  LIGHT_POSITION_X: {
    MIN: -6,
    MAX: 6,
    STEP: 0.1,
  },
  LIGHT_POSITION_Y: {
    MIN: -3,
    MAX: 3,
    STEP: 0.1,
  },
  LIGHT_POSITION_Z: {
    MIN: 0.5,
    MAX: 6,
    STEP: 0.1,
  },
  FOG_DENSITY: {
    MIN: 0.05,
    MAX: 0.30,
    STEP: 0.001,
  }
};

// How long to wait before executing some code after the same event
// has stopped being fired for a constant number of miliseconds.
export const DEBOUNCE = 250;
