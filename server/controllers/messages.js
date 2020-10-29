var models = require('../models');

module.exports = {
  // a function which handles a get request for all messages
  get: function (req, res) {
    models.messages.getAll((err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(JSON.stringify(result));
      }
    });
  },

  // a function which handles posting a message to the database
  post: function (req, res) {
    models.messages.create(req.body, (err) => {
      if (err) {
        res.send(err);
      } else {
        res.end();
      }
    });
  }
};
