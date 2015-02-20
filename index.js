'use strict';

var http = require('http');
var port = process.env.PORT || 8000;

http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World\n');
}).listen(port, function() {
  console.log('Server started on port', port);
});


