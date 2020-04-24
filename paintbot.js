/**
 * 
 * app.js
 * 
 * Paint Bot
 * Robert Hieger
 * 04/24/2020
 * 
 */

 // REQUIRED MODULES:

 const process = ('process'); // allows command line switch with Node
 const fs = require('fs');
 const grid = require('./grid');

 // SET UP ENVIRONMENT:

 // x-y coordinates at start and endpoints of path

 const startX = 0;
 const startY = 0;
 
 const startCoord = [
     startX,
     startY
 ];
 
 let xCoord = startX;
 let yCoord = startY;

 console.log('\n\n****************************************');
 console.log('*                                      *');
 console.log('*            PAINT BOT v1.0.0          *');
 console.log('*                                      *');
 console.log('****************************************\n');

let coordinates = JSON.stringify(grid);

console.log(coordinates);

// READ DIRECTIONS (PATH) INTO MEMORY:

const moves = fs.readFile(
   'directions.txt',
   { encoding: 'utf8' },
   (err, moves)  =>  {
      if (err) console.error(err);
      let moveData = moves.split('\n', 28);
      console.log(moveData);

});
