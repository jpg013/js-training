var users = [{id: 0, firstName: 'Justin', lastName: 'Graber', email: 'Justin.Graber@yrcfreight.com'}];

module.exports =  {
  getAllUsers: function() {
    return users;
  },
  getUserById: function(id) {
    for (var i = 0; i < users.length; i++) {
      var user = users[i];
      if (user.id == id) {
        return user;
      }
    }
  },
  addUser: function(user) {
    users.push(user);
  },
  deleteUser: function(id) {
    var found = false;
    for (var i = 0; i < users.length; i++) {
      var user = users[i];
      if (user.id == id) {
        found = true;
        users.splice(i, 1);
      }
    }
    return found;
  },
  generateId: function() {
    var id = 0;
    for (var i = 0; i < users.length; i++) {
      var user = users[i];
      if (user.id >= id) {
        id = user.id + 1;
      }
    }
    return id;
  },
  updateUser: function(oldUser) {
    for (var i = 0; i < users.length; i++) {
      var user = users[i];
      if (user.id == oldUser.id) {
        user.firstName = oldUser.firstName;
        user.lastName = oldUser.lastName;
        user.email = oldUser.email;
      }
    }
  }
};
