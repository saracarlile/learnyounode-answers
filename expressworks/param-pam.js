var express = require('express');
var app = express();
var crypto =  require('crypto');

app.put('/message/:id', function (req, res) {
    var id =  req.params.id;
    var hash =   crypto.createHash('sha1')
      .update(new Date().toDateString() + id)
      .digest('hex');

      res.end(hash);
});

app.listen(process.argv[2]);

console.log("server now running - port 8080 on localhost");
// viewed at http://localhost:8080