var path     = require('path');
var fs       = require('fs');
var filePath = path.join(__dirname, 'mini-lab-sample-text');

var FileParser = function(fileName) {
  var _file = fileName, _fileContents = "";

  return {
    readFile: function() {
      var buffer = fs.readFileSync(_file, 'utf8');
      _fileContents = buffer.toString();
    },
    printFile: function() {
      console.log(_fileContents);
    },
    getNumberOfLines: function() {
      var newLines = 0;
      for (var i = 0; i < _fileContents.length; i++) {
        if (_fileContents[i] === '\n') {
          newLines++;
        }
      }
      return newLines;
    },
    removeNewLines: function() {
      _fileContents.replace(/\r?\n|\r/g, ' ');
    },
    replaceName: function(name) {
      var words = _fileContents.split(' ');
      for (var index = 0; index < words.length; index++) {
        var word = words[index];
        if (word.indexOf('Sam') > -1) {
          words[index] = word.replace('Sam', name);
        }
      }
      _fileContents = words.join(' ');
    }
  }
};

var parser = new FileParser(filePath);
parser.readFile();
//parser.getNumberOfLines();
//parser.removeNewLines();
//parser.replaceName('Justin');
//parser.printFile();



