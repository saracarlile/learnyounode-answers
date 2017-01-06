var http = require('http');
var body = '';
var url = process.argv[2];

http.get(url, function(res) {
  res.on('data', function(chunk) {
    body += chunk;
  });
  res.on('end', function() {
    // all data has been downloaded
    console.log(body.length);
    console.log(body);
  });
});

