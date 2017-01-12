var express = require("express");
var app = express();
var path = require('path');
var port = process.argv[2];
var dir = process.argv[3];

app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));

app.listen(port);