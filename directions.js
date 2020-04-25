/**
 * 
 * directions.js
 * 
 * This module reads text file, converts resulting text string to array
 * of strings, and returns the next coordinates to which the paint bot
 * has traveled.
 * 
 * Robert Hieger
 * 04/25/2020
 * 
 */

 // REQUIRED MODULES:

 const fs = require('fs');

 const grid = require('./grid');

 // READ DIRECTIONS (PATH) INTO MEMORY:

const moves = fs.readFile(
    'directions.txt',
    { encoding: 'utf8' },
    (err, moves)  =>  {
       if (err) console.error(err);
       const moveData = moves.split('\n', 28);
       return moveData;
});

const returnMove = () =>  {
    moveData.forEach( (move) =>  {
        let currentCoords = grid.getCoordinates();   
        let direction;

        switch (direction)  {
            case "left":
                currentCoords = currentCoord[0] - 1;
                console.log(currentCoords);
                break;
        }
    });
};

module.exports = {
    moves,
    returnMove
}