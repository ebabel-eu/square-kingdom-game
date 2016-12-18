// Debug mode?
export const DEBUG = false;

// Define the whole color scheme in this one place.
export const COLORS = {
  WHITE: 0xFFFFFF,
  BLACK: 0x000000,
  GREY: 0xCCCCCC,
  GREEN: 0x00FF00,
  RED: 0xFF0000,
  AMBER: 0xFFC200,
};

// Light.
export const LIGHT_COLOR = COLORS.WHITE;
export const LIGHT_INTENSITY = 1.25;
export const LIGHT_ANGLE = Math.PI / 4;
export const LIGHT_POSITION = {
  X: 3,
  Y: 6,
  Z: 6,
};

// Camera.
export const CAMERA_POSITION = {
  X: 0,
  Y: 0,
  Z: 7,
};

// Square.
export const PLAYER_SQUARE_COLOR = COLORS.GREEN;
export const ENEMY_SQUARE_COLOR = COLORS.RED;
export const NEUTRAL_SQUARE_COLOR = COLORS.AMBER;

export const HIGHLIGHT = COLORS.GREEN;

// GUI.
export const GUI = {
  LIGHT_INTENSITY: {
    MIN: 0.5,
    MAX: 1.5,
    STEP: 0.01,
  },
  LIGHT_POSITION_X: {
    MIN: -3,
    MAX: 3,
    STEP: 0.1,
  },
  LIGHT_POSITION_Y: {
    MIN: 3,
    MAX: 6,
    STEP: 0.1,
  },
  LIGHT_POSITION_Z: {
    MIN: 3,
    MAX: 6,
    STEP: 0.1,
  },
};

// How long to wait before executing some code after the same event
// has stopped being fired for a constant number of miliseconds.
export const DEBOUNCE = 250;
