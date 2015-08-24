var express = require('express');
var https = require('https');

// ==============================
// Create new router instance
// ==============================
var router = express.Router();

module.exports = function (app) {
  // ==============================
  // Controller definitions
  // ==============================
  function getRandomNumber(req, res, next) {
    https.get('https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new', function(response) {
      response.on('data', function(chunk) {
        res.json({number: chunk.toString()});
      });
      response.on('error', function() {
        res.sendStatus(500);
      })
    });
  }

  // ==============================
  // Assign Controllers to Routes
  // ==============================
  router.get('/', getRandomNumber);

  // ==============================
  // Mount router instance to app
  // ==============================
  app.use('/api/randomnumber', router);
  return router;
};
