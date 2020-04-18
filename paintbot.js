/**
 * 
 * app.js
 * 
 * Paint Bot
 * Robert Hieger
 * 04/18/2020
 * 
 */

 // REQUIRED MODULES:

 const fs = require('fs');

 // SET UP ENVIRONMENT:

 // x-y coordinates at start and endpoints of path

let startXCoord = 0;
let startYCoord = 0;

// CONSTANTS FOR BEGINNING AND ENDING COORDINATES:

const STARTX = 0;
const ENDX = 9;
const STARTY = 0;
const ENDY = 9;

// Values of endpoints dependent on path defined
// in directions.json.

let endXCoord;
let endYCoord;

// READ DIRECTIONS (PATH) INTO MEMORY:

fs.readFile('directions.json', (err, rawData) =>  {

   if (err) return console.error(err);

   let directions = JSON.parse(rawData);

   console.log(directions);

});
