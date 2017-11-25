let socket;

function init(url){
  // probably the vanilla javascript WebSocket
  socket = new WebSocket(url);
  console.log('connecting...');
}

// Sets it so that handlerFunction is executed
// when the WebSocket is opened
function registerOpenHandler(handlerFunction){
  socket.onopen = () => {
    console.log('open');
    handlerFunction();
  }
}

function registerMessageHandler(handlerFunction){
  socket.onmessage = (e) => {
    console.log('message', e.data);
    let data = JSON.parse(e.data);
    handlerFunction(data);
  };
}

function sendMessage(payload){
  socket.send(JSON.stringify(payload));
}

export default {
  init,
  registerOpenHandler,
  registerMessageHandler,
  sendMessage
}
