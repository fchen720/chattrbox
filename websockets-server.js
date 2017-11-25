var WebSocket = require('ws');
var WebSocketServer = WebSocket.Server;
var port = 3001;
var ws = new WebSocketServer({
  port: port
});
var messages = [];

console.log('websockets server started');
ws.on('connection', 
  function(socket){
    console.log('client connection established');

    messages.forEach(function(item){
      socket.send(item);
    });

    socket.on('message',
      function(data){
        console.log('message received:' + data);
        // Load this into message history
        messages.push(data);

        //ws.clients keeps track of all client sockets
        //We ask our main structure for a list of sockets,
        //and send messages to them ALL
        ws.clients.forEach(function(clientSocket){
          clientSocket.send(data);
        });
      }
    );
  }
);
