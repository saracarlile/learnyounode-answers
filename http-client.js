var http = require('http');
var body = '';
var url = process.argv[2];

http.get(url, function(res) {
  res.setEncoding('utf8');
  res.on('data', function(chunk) {
    body += chunk + '\n';
  });
  res.on('end', function() {
    // all data has been downloaded
    console.log(body);
  });
});

