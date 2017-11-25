import socket from './ws-client.js';

class ChatApp{
  constructor(){
    socket.init('ws://localhost:3001');
    socket.registerOpenHandler(() => {
      let message = new ChatMessage({message:'pow'});
      // We defined the method serialize
      // To strip the object of its methods and have a simple
      // object with only its properties.
      // But of course when sendMessage receives this object
      // it still needs to be stringified by JSON
      socket.sendMessage(message.serialize());
    });
    socket.registerMessageHandler((data) => {
      console.log(data);
    });
  }
}

class ChatMessage{
  constructor({message:m,
                user:u = 'batman',
                timestamp: t= (new Date()).getTime()}){
    this.message = m;
    this.user = u;
    this.timestamp = t;
  }
  serialize(){
    return {
      user: this.user,
      message: this.message,
      timestamp: this.timestamp
    };
  }
}

export default ChatApp;
