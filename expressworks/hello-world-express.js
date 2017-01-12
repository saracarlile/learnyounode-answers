var express = require("express");
var app = express();
var port = process.argv[2];

app.all("*", function(request, response, next) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  next();
});

app.get("/", function(request, response) {
  response.end("Welcome to the homepage!");
});

app.get("/home", function(request, response) {
  response.end("Hello World!");
});

app.get("*", function(request, response) {
  response.end("404!");
});



app.listen(port);