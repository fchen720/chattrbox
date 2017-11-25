var path = require('path');

var extractFilePath = function(url){
  var filePath;
  var fileName = 'index.html';
  if(url.length > 1){
    fileName = url.substring(1);
  }
  console.log(fileName);

  // This path resolution tells it to look in the app folder
  var filePath = path.resolve(__dirname, 'app', fileName);
  return filePath;
}

// when exported, the value to export is extractFilePath function
module.exports = extractFilePath;
