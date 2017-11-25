(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wsClient = require('./ws-client.js');

var _wsClient2 = _interopRequireDefault(_wsClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ChatApp = function ChatApp() {
  _classCallCheck(this, ChatApp);

  _wsClient2.default.init('ws://localhost:3001');
  _wsClient2.default.registerOpenHandler(function () {
    var message = new ChatMessage({ message: 'pow' });
    // We defined the method serialize
    // To strip the object of its methods and have a simple
    // object with only its properties.
    // But of course when sendMessage receives this object
    // it still needs to be stringified by JSON
    _wsClient2.default.sendMessage(message.serialize());
  });
  _wsClient2.default.registerMessageHandler(function (data) {
    console.log(data);
  });
};

var ChatMessage = function () {
  function ChatMessage(_ref) {
    var m = _ref.message,
        _ref$user = _ref.user,
        u = _ref$user === undefined ? 'batman' : _ref$user,
        _ref$timestamp = _ref.timestamp,
        t = _ref$timestamp === undefined ? new Date().getTime() : _ref$timestamp;

    _classCallCheck(this, ChatMessage);

    this.message = m;
    this.user = u;
    this.timestamp = t;
  }

  _createClass(ChatMessage, [{
    key: 'serialize',
    value: function serialize() {
      return {
        user: this.user,
        message: this.message,
        timestamp: this.timestamp
      };
    }
  }]);

  return ChatMessage;
}();

exports.default = ChatApp;

},{"./ws-client.js":3}],2:[function(require,module,exports){
'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _app2.default(); // We don't import ChatApp per se,
// We actually import the default export from app.js
// and call it ChatApp, as a logical naming convention

},{"./app":1}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var socket = void 0;

function init(url) {
  // probably the vanilla javascript WebSocket
  socket = new WebSocket(url);
  console.log('connecting...');
}

// Sets it so that handlerFunction is executed
// when the WebSocket is opened
function registerOpenHandler(handlerFunction) {
  socket.onopen = function () {
    console.log('open');
    handlerFunction();
  };
}

function registerMessageHandler(handlerFunction) {
  socket.onmessage = function (e) {
    console.log('message', e.data);
    var data = JSON.parse(e.data);
    handlerFunction(data);
  };
}

function sendMessage(payload) {
  socket.send(JSON.stringify(payload));
}

exports.default = {
  init: init,
  registerOpenHandler: registerOpenHandler,
  registerMessageHandler: registerMessageHandler,
  sendMessage: sendMessage
};

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBcXHNjcmlwdHNcXHNyY1xcYXBwLmpzIiwiYXBwXFxzY3JpcHRzXFxzcmNcXG1haW4uanMiLCJhcHBcXHNjcmlwdHNcXHNyY1xcd3MtY2xpZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7SUFFTSxPLEdBQ0osbUJBQWE7QUFBQTs7QUFDWCxxQkFBTyxJQUFQLENBQVkscUJBQVo7QUFDQSxxQkFBTyxtQkFBUCxDQUEyQixZQUFNO0FBQy9CLFFBQUksVUFBVSxJQUFJLFdBQUosQ0FBZ0IsRUFBQyxTQUFRLEtBQVQsRUFBaEIsQ0FBZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBTyxXQUFQLENBQW1CLFFBQVEsU0FBUixFQUFuQjtBQUNELEdBUkQ7QUFTQSxxQkFBTyxzQkFBUCxDQUE4QixVQUFDLElBQUQsRUFBVTtBQUN0QyxZQUFRLEdBQVIsQ0FBWSxJQUFaO0FBQ0QsR0FGRDtBQUdELEM7O0lBR0csVztBQUNKLDZCQUVvRDtBQUFBLFFBRi9CLENBRStCLFFBRnZDLE9BRXVDO0FBQUEseUJBRHRDLElBQ3NDO0FBQUEsUUFEakMsQ0FDaUMsNkJBRDdCLFFBQzZCO0FBQUEsOEJBQXRDLFNBQXNDO0FBQUEsUUFBM0IsQ0FBMkIsa0NBQXZCLElBQUksSUFBSixFQUFELENBQWEsT0FBYixFQUF3Qjs7QUFBQTs7QUFDbEQsU0FBSyxPQUFMLEdBQWUsQ0FBZjtBQUNBLFNBQUssSUFBTCxHQUFZLENBQVo7QUFDQSxTQUFLLFNBQUwsR0FBaUIsQ0FBakI7QUFDRDs7OztnQ0FDVTtBQUNULGFBQU87QUFDTCxjQUFNLEtBQUssSUFETjtBQUVMLGlCQUFTLEtBQUssT0FGVDtBQUdMLG1CQUFXLEtBQUs7QUFIWCxPQUFQO0FBS0Q7Ozs7OztrQkFHWSxPOzs7OztBQ2xDZjs7Ozs7O0FBQ0Esb0IsQ0FKQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDRkEsSUFBSSxlQUFKOztBQUVBLFNBQVMsSUFBVCxDQUFjLEdBQWQsRUFBa0I7QUFDaEI7QUFDQSxXQUFTLElBQUksU0FBSixDQUFjLEdBQWQsQ0FBVDtBQUNBLFVBQVEsR0FBUixDQUFZLGVBQVo7QUFDRDs7QUFFRDtBQUNBO0FBQ0EsU0FBUyxtQkFBVCxDQUE2QixlQUE3QixFQUE2QztBQUMzQyxTQUFPLE1BQVAsR0FBZ0IsWUFBTTtBQUNwQixZQUFRLEdBQVIsQ0FBWSxNQUFaO0FBQ0E7QUFDRCxHQUhEO0FBSUQ7O0FBRUQsU0FBUyxzQkFBVCxDQUFnQyxlQUFoQyxFQUFnRDtBQUM5QyxTQUFPLFNBQVAsR0FBbUIsVUFBQyxDQUFELEVBQU87QUFDeEIsWUFBUSxHQUFSLENBQVksU0FBWixFQUF1QixFQUFFLElBQXpCO0FBQ0EsUUFBSSxPQUFPLEtBQUssS0FBTCxDQUFXLEVBQUUsSUFBYixDQUFYO0FBQ0Esb0JBQWdCLElBQWhCO0FBQ0QsR0FKRDtBQUtEOztBQUVELFNBQVMsV0FBVCxDQUFxQixPQUFyQixFQUE2QjtBQUMzQixTQUFPLElBQVAsQ0FBWSxLQUFLLFNBQUwsQ0FBZSxPQUFmLENBQVo7QUFDRDs7a0JBRWM7QUFDYixZQURhO0FBRWIsMENBRmE7QUFHYixnREFIYTtBQUliO0FBSmEsQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgc29ja2V0IGZyb20gJy4vd3MtY2xpZW50LmpzJztcclxuXHJcbmNsYXNzIENoYXRBcHB7XHJcbiAgY29uc3RydWN0b3IoKXtcclxuICAgIHNvY2tldC5pbml0KCd3czovL2xvY2FsaG9zdDozMDAxJyk7XHJcbiAgICBzb2NrZXQucmVnaXN0ZXJPcGVuSGFuZGxlcigoKSA9PiB7XHJcbiAgICAgIGxldCBtZXNzYWdlID0gbmV3IENoYXRNZXNzYWdlKHttZXNzYWdlOidwb3cnfSk7XHJcbiAgICAgIC8vIFdlIGRlZmluZWQgdGhlIG1ldGhvZCBzZXJpYWxpemVcclxuICAgICAgLy8gVG8gc3RyaXAgdGhlIG9iamVjdCBvZiBpdHMgbWV0aG9kcyBhbmQgaGF2ZSBhIHNpbXBsZVxyXG4gICAgICAvLyBvYmplY3Qgd2l0aCBvbmx5IGl0cyBwcm9wZXJ0aWVzLlxyXG4gICAgICAvLyBCdXQgb2YgY291cnNlIHdoZW4gc2VuZE1lc3NhZ2UgcmVjZWl2ZXMgdGhpcyBvYmplY3RcclxuICAgICAgLy8gaXQgc3RpbGwgbmVlZHMgdG8gYmUgc3RyaW5naWZpZWQgYnkgSlNPTlxyXG4gICAgICBzb2NrZXQuc2VuZE1lc3NhZ2UobWVzc2FnZS5zZXJpYWxpemUoKSk7XHJcbiAgICB9KTtcclxuICAgIHNvY2tldC5yZWdpc3Rlck1lc3NhZ2VIYW5kbGVyKChkYXRhKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBDaGF0TWVzc2FnZXtcclxuICBjb25zdHJ1Y3Rvcih7bWVzc2FnZTptLFxyXG4gICAgICAgICAgICAgICAgdXNlcjp1ID0gJ2JhdG1hbicsXHJcbiAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IHQ9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCl9KXtcclxuICAgIHRoaXMubWVzc2FnZSA9IG07XHJcbiAgICB0aGlzLnVzZXIgPSB1O1xyXG4gICAgdGhpcy50aW1lc3RhbXAgPSB0O1xyXG4gIH1cclxuICBzZXJpYWxpemUoKXtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHVzZXI6IHRoaXMudXNlcixcclxuICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxyXG4gICAgICB0aW1lc3RhbXA6IHRoaXMudGltZXN0YW1wXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdEFwcDtcclxuIiwiLy8gV2UgZG9uJ3QgaW1wb3J0IENoYXRBcHAgcGVyIHNlLFxyXG4vLyBXZSBhY3R1YWxseSBpbXBvcnQgdGhlIGRlZmF1bHQgZXhwb3J0IGZyb20gYXBwLmpzXHJcbi8vIGFuZCBjYWxsIGl0IENoYXRBcHAsIGFzIGEgbG9naWNhbCBuYW1pbmcgY29udmVudGlvblxyXG5pbXBvcnQgQ2hhdEFwcCBmcm9tICcuL2FwcCc7XHJcbm5ldyBDaGF0QXBwKCk7XHJcbiIsImxldCBzb2NrZXQ7XHJcblxyXG5mdW5jdGlvbiBpbml0KHVybCl7XHJcbiAgLy8gcHJvYmFibHkgdGhlIHZhbmlsbGEgamF2YXNjcmlwdCBXZWJTb2NrZXRcclxuICBzb2NrZXQgPSBuZXcgV2ViU29ja2V0KHVybCk7XHJcbiAgY29uc29sZS5sb2coJ2Nvbm5lY3RpbmcuLi4nKTtcclxufVxyXG5cclxuLy8gU2V0cyBpdCBzbyB0aGF0IGhhbmRsZXJGdW5jdGlvbiBpcyBleGVjdXRlZFxyXG4vLyB3aGVuIHRoZSBXZWJTb2NrZXQgaXMgb3BlbmVkXHJcbmZ1bmN0aW9uIHJlZ2lzdGVyT3BlbkhhbmRsZXIoaGFuZGxlckZ1bmN0aW9uKXtcclxuICBzb2NrZXQub25vcGVuID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ29wZW4nKTtcclxuICAgIGhhbmRsZXJGdW5jdGlvbigpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVnaXN0ZXJNZXNzYWdlSGFuZGxlcihoYW5kbGVyRnVuY3Rpb24pe1xyXG4gIHNvY2tldC5vbm1lc3NhZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ21lc3NhZ2UnLCBlLmRhdGEpO1xyXG4gICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKGUuZGF0YSk7XHJcbiAgICBoYW5kbGVyRnVuY3Rpb24oZGF0YSk7XHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2VuZE1lc3NhZ2UocGF5bG9hZCl7XHJcbiAgc29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkocGF5bG9hZCkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgaW5pdCxcclxuICByZWdpc3Rlck9wZW5IYW5kbGVyLFxyXG4gIHJlZ2lzdGVyTWVzc2FnZUhhbmRsZXIsXHJcbiAgc2VuZE1lc3NhZ2VcclxufVxyXG4iXX0=
