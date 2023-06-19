var http = require('http');
http.createServer(function (req, res) {
  res.write("I'm ue3ex");
  res.end();
}).listen(8080);