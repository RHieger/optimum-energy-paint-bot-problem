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
 const directions = require('./directions');

 // SET UP ENVIRONMENT:

 console.log('\n\n****************************************');
 console.log('*                                      *');
 console.log('*            PAINT BOT v1.0.0          *');
 console.log('*                                      *');
 console.log('****************************************\n');

grid.getCoordinates(0, 'Starting Coordinates');

directions.returnMove();