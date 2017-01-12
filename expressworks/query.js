var express = require('express');
var app = express();

app.get('/search', function (req, res) {
    var query = req.query;
    res.send(query);
});

app.listen(process.argv[2]);

console.log("server now running - port 8080 on localhost");
// viewed at http://localhost:8080