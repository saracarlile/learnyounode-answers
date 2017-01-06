var http  = require('http');
var url = require('url');


var port = process.argv[2];

var parseTime = function (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}
 
function unixTime (time) {
  return {unixtime: time.getTime()}
}

var parseQ = function(url){
    if (url.pathname === '/api/parsetime'){
        return parseTime(new Date(url.query.iso));
    }
    if(url.pathname === '/api/unixtime'){
        return unixTime(new Date(url.query.iso));
    }
    else {
        return 'enter a valid endpoint url';
    }
}

var server = http.createServer(function (request, response) {
    if (request.method === 'GET') {
    url = url.parse(request.url, true);
    response.writeHead(200, {'content-type': 'application/json'});
    response.end(JSON.stringify(parseQ(url)))
    }
    else {
    response.writeHead(405)
    response.end()
  }
    
    
});

server.listen(port);


