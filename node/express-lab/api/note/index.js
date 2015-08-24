var express = require('express');
var fs = require('fs');

// ==============================
// Create new router instance
// ==============================
var router = express.Router();


module.exports = function (app) {
  // ==============================
  // Controller definitions
  // ==============================
  function getNote(req, res, next) {
    var readableStream = fs.createReadStream('note');
    var note = "";

    readableStream.on('data', function(chunk) {
      note += chunk.toString();
    });

    readableStream.on("end", function() {
      res.json({note: note});
    });

    readableStream.on('error', function(e) {
      console.log(e);
      res.sendStatus(500);
    })
  }
  function addNote(req, res, next) {
    var stream = fs.createWriteStream("note");
    stream.once('open', function(fd) {
      stream.write(req.body.text+"\n");
      stream.end();
    });

    stream.on('close', function() {
      res.sendStatus(200);
    })

    stream.on('error', function() {
      res.sendStatus(500);
    })
  }

  // ==============================
  // Assign Controllers to Routes
  // ==============================
  router.get('/', getNote);
  router.post('/', addNote);

  // ==============================
  // Mount router instance to app
  // ==============================
  app.use('/api/note', router);

  return router;
};
