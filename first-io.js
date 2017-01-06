var fs = require('fs');
var file = process.argv[2];
var bufFile = fs.readFileSync(file);  // read file returns binary data in Buffer object
var strFile = bufFile.toString(); //convert buffer object to string
var split = strFile.split('\n');  //split at new lines
console.log(split.length - 1);  // count new lines minus one in array (counting new lines not lines themselves)