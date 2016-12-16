# Square Kingdom Game
This is a single player, turn based, board game (player vs AI). The aim is to take over the whole board.

## Install

```
npm install
```

## Build only once

```
npm run build
```

## Run locally

```
npm start
```

Browse to http://localhost:8080 or whichever port is available.

## Develop and build continuously

```
npm run dev
```

## Deploy to production

Publish any changes to the gh-pages branch and browse to https://ebabel-eu.github.io/square-kingdom-game/

## Rules of the game

### Start of the game

- The board is made of 7 by 7 squares.
- The player starts anywhere by clicking a neutral square (yellow, turns green).
- The AI picks a starting square that isn't the one taken by the player (also yellow, turns red).

### How to take over a neutral square (yellow)

### How to win

- Fill the whole board by taking over all the squares, both the neutral (yellow) and the AI ones (red).

## Resources

- Hexagon game: https://www.h3xed.com/blogmedia/hex1/
- Maths and co-ordinates: http://www.redblobgames.com/grids/hexagons/
- Pixel to hexagon: http://www.redblobgames.com/grids/hexagons/more-pixel-to-hex.html 
- Interesting notes on hex grids: http://www.gamasutra.com/blogs/HermanTulleken/20140912/225495/20_Fun_Grid_Facts_Hex_Grids.php
- Time based (delta) animation: https://www.viget.com/articles/time-based-animation
