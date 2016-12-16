# Square Kingdom Game
This is a persistent, multiplayer world of tiles, where each player tries to expand his territory of tiles from one starting tile to more tiles conquered from his neighbours.

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

## Rules of the game

- The world is also in constant expansion: a new player is placed in a new square node that is not occupied by anyone.
- Same rules apply as the Hexagon game below, but the base value of each node is 8 instead of 6.
- A player can modify the content of the nodes he owns.
- A player can fortify a node to prevent other players from taking it from him.
- A player can only take over a node that shares a border with at least one of the nodes he owns.
- The nodes are shaped like a hexagon.
- A player without any node can explore further and find the edge of the known world so that a new node is created. That player can then take possession of that new node. This is only possible for a player that doesn’t have any node at all. The only other way of having a greater territory is to take it from other players.
- When adding a monster to a node, this monster will attack any player, including the player who placed him there. It’s a good idea to place the monster outside agro range.

### Fight

- The value of a newly created node is 6.
- Every 6 minutes of real time, all nodes get +1 in value but never go beyond 6.
- If node A attacks node B and they are both 6, they both lose all their points and fall down to 0.
- Node B has been conquered but both node A and B are vulnerable.
- If node C that has 2 points attacks node A while it has 0 points, node A is conquered at no cost to node C. Node C can also attack node B straight away.
- Everything is running in real time, in a persistent world, so players are not necessarily there.

## Resources

- Hexagon game: https://www.h3xed.com/blogmedia/hex1/
- Maths and co-ordinates: http://www.redblobgames.com/grids/hexagons/
- Pixel to hexagon: http://www.redblobgames.com/grids/hexagons/more-pixel-to-hex.html 
- Interesting notes on hex grids: http://www.gamasutra.com/blogs/HermanTulleken/20140912/225495/20_Fun_Grid_Facts_Hex_Grids.php
