var express = require("express");
var app = express();
var port = process.argv[2];


// Set the view directory to /views
app.set('views', process.argv[3]);

// Let's use the Jade templating language
app.set('view engine', 'jade');

app.get("/home", function(request, response) {
   response.render('index', {date: new Date().toDateString()})
});

app.listen(port);