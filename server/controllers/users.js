var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.users.getAll((err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(JSON.stringify(result));
      }
    });
  },
  post: function (req, res) {
    models.users.create(req.body);
    res.end();
  }
};
