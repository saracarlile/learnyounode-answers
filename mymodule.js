module.exports = function(directory, extension, callback){
    var fs = require('fs');
    var path = require('path');
	var arr = [];
    fs.readdir(directory, function (err, files) {
          if(err){
    		return callback(err);
        	}
          files.forEach(function(file) {
              arr.push(file);
          });
         var results = files.filter(function(file){
            if(path.extname(file) === ('.' + extension)){
            return file;
            }
         });
        return callback(null, results);
    });

};