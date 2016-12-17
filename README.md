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

- The board is made of 42 squares arranged in a 7 x 7 grid with 7 gaps.
- The player (green) starts anywhere by clicking a neutral square (yellow).
- The AI (red) picks a starting square that isn't the one taken by the player.
- The aim is to take all 42 squares.
- The value of each initial starting square is 1.

### Turn

- Each turn, a player has 2 points to place on the board.
- It's possible to increase the value of a square that is already won by clicking on it.
- The maximum value of any square is 8.

### Conditions for taking over any square (either yellow or red)

- The target square needs to be adjacent to any of the player (green) squares.
- "Adjacent" here means sharing a side, therefore a square in the diagonal can't be taken.

### How to take over a neutral square (yellow)

- Simply clicking on an adjacent yellow square will turn it green for the player, or red for the AI.
- The value of that newly won square is 1 point for each adjacent square from the player (or the AI when the AI plays).
- It's possible to give an extra point straight after taking a square if the player still has a point to place.

### How to take over an AI square (red)

- It's possible to take a red square if its value is the same or less than the sum of all green squares adjacent to it.

### How to win

- Fill the whole board by taking over all 42 squares, both the neutral (yellow) and the AI ones (red).

## Resources

- Hexagon game: https://www.h3xed.com/blogmedia/hex1/
- Maths and co-ordinates: http://www.redblobgames.com/grids/hexagons/
- Pixel to hexagon: http://www.redblobgames.com/grids/hexagons/more-pixel-to-hex.html 
- Interesting notes on hex grids: http://www.gamasutra.com/blogs/HermanTulleken/20140912/225495/20_Fun_Grid_Facts_Hex_Grids.php
- Time based (delta) animation: https://www.viget.com/articles/time-based-animation

## Attributions

- Texture 461223153.jpg: http://opengameart.org/node/7863
- Textures MysteryemWarzone2100Textures: http://opengameart.org/content/29-grounds-and-walls-and-water-1024x1024
