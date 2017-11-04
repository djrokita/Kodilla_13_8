var fs = require('fs');
var http = require('http');

var server = http.createServer(function(request, response) {
  response.setHeader('Content-Type', 'text/html', 'utf-8');
  if (request.method === 'GET' && request.url === '/') {
    fs.readFile('./index.html', function(err, data) {
      if (err) throw err;
      response.write(data);
      response.end();
    });
  } else {
    response.statusCode = 404;
    fs.readFile('./caution.jpeg', function(err, data) {
      if (err) throw err;
      response.setHeader('Content-Type', 'image/jpg', 'utf-8');
      response.write(data);
      response.end();
    });
  }
});

server.listen(9000);