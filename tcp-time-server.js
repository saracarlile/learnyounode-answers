var net = require('net');

 function zeroFill (i) {
      return (i < 10 ? '0' : '') + i
    }

var date = new Date();  
var data =  zeroFill(date.getFullYear()) + '-' + zeroFill(date.getMonth() + 1)  + '-' + zeroFill(date.getDate()) + ' '+ zeroFill(date.getHours()) + ':' + zeroFill(date.getMinutes());


var server = net.createServer(function listener(socket) {  
       // socket handling logic  
       socket.write(data);
       socket.end('\n');
     });  
  
server.listen(process.argv[2]);  
