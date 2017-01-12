var express = require('express');
var bodyParser = require('body-parser');
var app = express();


var urlencodedParser = bodyParser.urlencoded({ extended: false })


app.post('/form', urlencodedParser, function (req, res) {
  if (!req.body) return res.sendStatus(400)
  var output = req.body.str.split('').reverse().join('');
  res.end(output);
});

app.listen(process.argv[2]);

console.log("server now running - port 8080 on localhost");
// viewed at http://localhost:8080
 