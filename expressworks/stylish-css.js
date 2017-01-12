var express = require('express');
var app = express();
var path = require('path');


app.use(require('stylus').middleware(process.argv[3]));
app.use(express.static(process.argv[3]));

app.listen(process.argv[2]);

console.log("server now running - port 8080 on localhost");
// viewed at http://localhost:8080
 