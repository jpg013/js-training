var fs = require('fs');
var readableStream = fs.createReadStream('example-1-text');
var data = "";
function parseChunk(chunk) {
  data += chunk;
}
function onFinished() { console.log(data) }

readableStream.on('data', parseChunk);

readableStream.on("end", onFinished);

console.log("end of file line\n-------------------");
