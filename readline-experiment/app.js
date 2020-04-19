/**
 * 
 * app.js
 * 
 * Experimental code utilizing Node File System and readline
 * modules to read and output a plain text file line by line
 * 
 * Robert Hieger
 * 04/18/2020
 * 
*/

/**
 * 
 * REFERENCE ARTICLE:
 * 
 * Reading a File Line by Line in Node.js
 * by Vasyl Lagutin
 * 
 * https://stackabuse.com/reading-a-file-line-by-line-in-node-js/
 * 
 */

// REQUIRED MODULES:

const readline = require('readline');
const fs = require('fs');

// Set up interface for reading file line-by-line:

const lineReadInterface = readline.createInterface({
    input: fs.createReadStream('treasure-island.txt'),
    output: process.stdout,
    console: false
});

lineReadInterface.on('line', (line) =>  {
    console.log(line);
});
