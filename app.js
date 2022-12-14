const log = require('./logger.js');
const path = require('path');
const os = require('os');
const fs = require('fs');

// log('module loaded successfully');

// path Module
var pathObj = path.parse(__filename);
console.log(pathObj);

//OS Module
var totalMemory = os.totalmem();
var freeMemory = os.freemem();

//ES6
console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);

// File System Module
fs.readdir('./',function(err,files){
    if(err) console.log(err);
    else console.log(files);
});