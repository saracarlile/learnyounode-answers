var http = require('http');
var bl = require('bl');

var results = new Array;
var count = 0;

function printResults(list){
    for(var i=0; i <list.length; i++){
        console.log(list[i]);
    }
}

function getResp(index){
    http.get(process.argv[2 + index], function(data){
         data.pipe(bl(function (err, data) { 
        // `data` is a complete Buffer object containing the full data 
        if (err) return console.log("Error:", err);
        results[index] = data.toString();
       count++;
       if(count === 3) {
           printResults(results);
       }
      }));
    });
    
}

for (var i = 0; i < 3; i++) {
      getResp(i)
    }