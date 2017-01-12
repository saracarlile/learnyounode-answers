var express = require('express');
var fs = require('fs');
var app = express();

app.get('/books', function(req, res){
    fs.readFile(process.argv[3], function(err, data){
        if (err) console.log(err);
        res.json(JSON.parse(data))
    });
});

app.listen(process.argv[2]);
console.log("server now running - port 8080 on localhost");
// viewed at http://localhost:8080