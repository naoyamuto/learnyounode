var http = require("http");
var map = require('through2-map');
var portNum = process.argv[2];

var server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-type': 'text/plain' });

    if(req.method != "POST") {
      return res.end("Request is not POST....\n");
    }

    req.pipe(map(function(chunk) {
      return chunk.toString().toUpperCase();
    })).pipe(res);
});

server.listen(portNum);
console.log('app listening on port: ', portNum);
