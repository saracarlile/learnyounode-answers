var fs = require('fs');
var file = process.argv[2];

function finishedReading(error, data) {
  if (error) return console.error(error)
  var s = data.toString().split('\n');
  console.log(s.length - 1); 
}

fs.readFile(file, finishedReading)
