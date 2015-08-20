var http = require('http'), port = 8080;

function requestListener(req, res) {
  res.writeHead(200);
  res.end('Hello World!');
}

var server = http.createServer(requestListener);
server.listen(port);
console.log("listening on port : " + port);