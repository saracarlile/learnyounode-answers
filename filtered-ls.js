var fs = require('fs');
var directory = process.argv[2];
var extension = process.argv[3];
var arr = [];


fs.readdir(directory, function (err, files) {
  if (err) return console.error(err)
  files.forEach(function(file) {
      arr.push(file);
  });

  var list = arr.filter(function(file){
      var short = file.split('.');
      if(short[1] == extension){
          return file;
      }
  });
  
  list.forEach(function(file){
      console.log(file);
  });
});
