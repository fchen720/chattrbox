// We improted Node's http module, whose methods we'll use
// we store it in a convenient variable
var http = require('http');
//Import filesystem module
var fs = require('fs');
//Import path module
var path = require('path');
//Import other modules
var extract = require('./extract');
var wss = require('./websockets-server');

var handleError = function(err,res){
  res.writeHead(404);
  res.end();
};

var server = http.createServer(function(req, res){
  console.log('Responding to a request.');
  var filePath = extract(req.url);
  fs.readFile(filePath, function(err, data){
    if(err){
      // to handle error, it needs to know the error
      // and have a handler to the output object to do
      // something about it
      handleError(err, res);
      return;
    }
    else {
      res.setHeader('Content-Type', 'text/html');
      res.end(data);
    }
  })
});

// binding to a port
server.listen(3000);
