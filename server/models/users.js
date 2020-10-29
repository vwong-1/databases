var db = require('../db');

module.exports = {
  getAll: function (callback) {
    db.connection.query('SELECT * FROM users;', (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    });

  },
  create: function (input) {
    db.connection.query(`SELECT id FROM users WHERE username = "${input.username}";`, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        if (result.length === 0) {
          db.connection.query(`INSERT INTO users (username) VALUES ("${input.username}");`, (err) => {
            if (err) {
              console.log(err);
            }
          });
        }
      }
    });
  }
};
