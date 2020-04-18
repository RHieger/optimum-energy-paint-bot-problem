/**
 * 
 * app.js
 * 
 * Paint Bot
 * Robert Hieger
 * 04/18/2020
 * 
 */

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

// DIAGNOSTIC ONLY:

console.log();
console.log('Starting Coordinates:\n');
console.log(`startXCoord: ${startXCoord}`);
console.log(`startYCoord: ${startYCoord}`);
console.log();
console.log('CONSTANTS for X-Y Coordinates:\n');
console.log(`STARTX: ${STARTX}`);
console.log(`STARTY: ${STARTY}`);
console.log(`ENDX: ${ENDX}`);
console.log(`ENDY: ${ENDY}`);
console.log();
