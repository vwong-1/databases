var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.getAll();
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    // Sending req.body to
    models.create(req.body);
  } // a function which handles posting a message to the database
};
