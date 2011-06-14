var http = require('http');
var connect = require('connect');


connect(
  connect.logger(),
  connect.static(__dirname + '/public'),
  connect.router(function(app){
    app.get('/user/:id', function(req, res, next){
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Hello World\n' + req.params.id);
    });
    app.put('/user/:id', function(req, res, next){
    // populates req.params.id
    });
  })
).listen(8080);

console.log('Everythings shiny captian.');