/**
 *
 * app.js
 *
 * Experimental Node.js readfile module code
 *
 * PURPOSE: Collect Beginning and endeing points in Bot Path, and
 * generate count of squares painted.
 *
 * Robert Hieger
 * 04/20/2020
 *
 */

// REQUIRED MODULES:

const fs = require('fs');

const startX = 0;
const startY = 0;

const startCoord = [
    startX,
    startY
];

console.log(`Starting Coordinates: X=${ startX }, Y=${ startY }\n`);


fs.readFile('directions.txt', { encoding: 'utf8' }, (err, directions) => {
    if (err) console.error(err);
    
    directionData = directions.split(' ');    
    console.log(directionData);

});
