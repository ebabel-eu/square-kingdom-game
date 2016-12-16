import * as C from '../../constants';

// JSON data for all models: where to load their geometry and what their material is.
// @g: geometry path.
// @m: material color.
// @cs: castShadow.
// @rs: receiveShadow. 
// Note: to save storage space, the data is as concise as possible.
module.exports = {
  models: [
    {
      g: './models/square.json',
      m: C.PLAYER_SQUARE_COLOR,
      cs: true,
      rs: true,
      x: 0,
      y: 0,
    },
    {
      g: './models/square.json',
      m: C.ENEMY_SQUARE_COLOR,
      cs: true,
      rs: true,
      x: -1,
      y: 1,
    },
    {
      g: './models/square.json',
      m: C.ENEMY_SQUARE_COLOR,
      cs: true,
      rs: true,
      x: 0,
      y: 1,
    },
    {
      g: './models/square.json',
      m: C.ENEMY_SQUARE_COLOR,
      cs: true,
      rs: true,
      x: 1,
      y: 1,
    },
    {
      g: './models/square.json',
      m: C.ENEMY_SQUARE_COLOR,
      cs: true,
      rs: true,
      x: 1,
      y: 0,
    },
    {
      g: './models/square.json',
      m: C.ENEMY_SQUARE_COLOR,
      cs: true,
      rs: true,
      x: 1,
      y: -1,
    },
    {
      g: './models/square.json',
      m: C.ENEMY_SQUARE_COLOR,
      cs: true,
      rs: true,
      x: 1,
      y: -1,
    },
    {
      g: './models/square.json',
      m: C.ENEMY_SQUARE_COLOR,
      cs: true,
      rs: true,
      x: 0,
      y: -1,
    },
    {
      g: './models/square.json',
      m: C.ENEMY_SQUARE_COLOR,
      cs: true,
      rs: true,
      x: -1,
      y: -1,
    },
    {
      g: './models/square.json',
      m: C.ENEMY_SQUARE_COLOR,
      cs: true,
      rs: true,
      x: -1,
      y: 0,
    },
  ],
};
