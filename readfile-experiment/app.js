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
 * 04/24/2020
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

let xCoord = startX;
let yCoord = startY;

const grid = [
    
    { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, 
    { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 },
    { x: 8, y: 0 }, { x: 9, y: 0 }, { x: 10, y: 1 }, { x: 11, y: 1 },
    { x: 12, y: 1 }, { x: 13, y: 1 }, { x: 14, y: 1 }, { x: 15, y: 1 },
    { x: 16, y: 1 }, { x: 17, y: 1 }, { x: 18, y: 1 }, { x: 19, y: 1 },
    { x: 20, y: 2 }, { x: 21, y: 2 }, { x: 22, y: 2 }, { x: 23, y: 2 },
    { x: 24, y: 2 }, { x: 25, y: 2 }, { x: 26, y: 2 }, { x: 27, y: 2 },
    { x: 28, y: 2 }, { x: 29, y: 2 }, { x: 30, y: 3 }, { x: 31, y: 3 },
    { x: 32, y: 3 }, { x: 33, y: 3 }, { x: 34, y: 3 }, { x: 35, y: 3 },
    { x: 36, y: 3 }, { x: 37, y: 3 }, { x: 38, y: 3 }, { x: 39, y: 3 },
    { x: 40, y: 4 }, { x: 41, y: 4 }, { x: 42, y: 4 }, { x: 43, y: 4 },
    { x: 44, y: 4 }, { x: 45, y: 4 }, { x: 46, y: 4 }, { x: 47, y: 4 },
    { x: 49, y: 4 }, { x: 50, y: 5 }, { x: 51, y: 5 }, { x: 52, y: 5 },
    { x: 53, y: 5 }, { x: 54, y: 5 }, { x: 55, y: 5 }, { x: 56, y: 5 },
    { x: 57, y: 5 }, { x: 58, y: 5 }, { x: 59, y: 5 }, { x: 60, y: 6 },
    { x: 61, y: 6 }, { x: 62, y: 6 }, { x: 63, y: 6 }, { x: 64, y: 6 },
    { x: 65, y: 6 }, { x: 66, y: 6 }, { x: 67, y: 6 }, { x: 68, y: 6 },
    { x: 69, y: 6 }, { x: 70, y: 7 }, { x: 71, y: 7 }, { x: 72, y: 7 },
    { x: 73, y: 7 }, { x: 74, y: 7 }, { x: 75, y: 7 }, { x: 76, y: 7 },
    { x: 77, y: 7 }, { x: 78, y: 7 }, { x: 79, y: 7 }, { x: 80, y: 8 },
    { x: 81, y: 8 }, { x: 82, y: 8 }, { x: 83, y: 8 }, { x: 84, y: 8 },
    { x: 85, y: 8 }, { x: 86, y: 8 }, { x: 87, y: 8 }, { x: 88, y: 8 },
    { x: 89, y: 8 }, { x: 90, y: 9 }, { x: 91, y: 9 }, { x: 92, y: 9 },
    { x: 93, y: 9 }, { x: 94, y: 9 }, { x: 95, y: 9 }, { x: 96, y: 9 },
    { x: 97, y: 9 }, { x: 98, y: 9 }, { x: 99, y: 9 }
];

console.log('\n\nGrid X/Y Coordinates:');
console.log('--------------------\n');

let coordinates = JSON.stringify(grid);

console.log(coordinates);

let squareCount = 0;

console.log(`Starting Coordinates: X=${ startX }, Y=${ startY }\n`);


fs.readFile('directions.txt', { encoding: 'utf8' }, (err, directions) => {
    if (err) console.error(err);
    
    directionData = directions.split(' ');

    console.log(directions);
});
