var express = require('express');
var userService = require('../../user-service');

// ==============================
// Create new router instance
// ==============================
var router = express.Router();

module.exports = function (app) {
  // ==============================
  // Controller function definitions
  // ==============================
  function getAllUsers(req, res, next) {
    res.json({users: userService.getAllUsers()});
  }
  function newUser(req, res, next) {
    var firstName = req.body.firstName, lastName = req.body.lastName, email = req.body.email;
    if (!firstName || !lastName || !email) {
      return res.sendStatus(400);
    }
    var user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      id: userService.generateId()
    }
    userService.addUser(user);
    res.sendStatus(200);
  }
  function getUser(req, res, next) {
    var userId = req.params.id;
    if (!userId) {
      return res.sendStatus(400);
    }
    var user = userService.getUserById(userId);
    if (user) {
      res.json({success: true, user: user});
    } else {
      res.send({sucess: false})
    }
  }
  function deleteUser(req, res, next) {
    var userId = req.params.id;
    if (!userId) {
      return res.sendStatus(400);
    }
    var success = userService.deleteUser(userId);
    res.json({success: success});
  }
  function updateUser(req, res, next) {
    var userId = req.params.id;
    if (!userId) {
      return res.sendStatus(400);
    }
    var firstName = req.body.firstName, lastName = req.body.lastName, email = req.body.email;
    if (!firstName || !lastName || !email) {
      return res.sendStatus(400);
    }
    var user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      id: userId
    }
    userService.updateUser(user);
    res.sendStatus(200);
  }

  // ==============================
  // Assign Controllers to Routes
  // ==============================
  router.get('/', getAllUsers);
  router.post('/', newUser);
  router.get('/:id', getUser);
  router.delete('/:id', deleteUser);
  router.put('/:id', updateUser);

  // ==============================
  // Mount router instance to app
  // ==============================
  app.use('/api/user', router);

  return router;
};
