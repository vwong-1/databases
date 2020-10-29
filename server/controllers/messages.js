var models = require('../models');

module.exports = {
  // a function which handles a get request for all messages
  get: function (req, res) {
    var data = models.messages.getAll();
    res.send(JSON.stringify(data));

  },

  // a function which handles posting a message to the database
  post: function (req, res) {
    models.messages.create(req.body);
    res.end();
  }
};
