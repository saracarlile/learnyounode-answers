var directory = process.argv[2];
var extension = process.argv[3];

var mymodule = require('./mymodule.js');


mymodule(directory, extension, function(err, list){
    if (err) return console.log("Error:", err)
    
    list.forEach(function(file){
      console.log(file);
    });
   
});