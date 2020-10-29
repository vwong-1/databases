var db = require('../db');

module.exports = {
  // a function which produces all the messages
  getAll: function (callback) {
    db.connection.query('SELECT * FROM messages;', (err, result) => {
      if (err) {
        callback(err);
      } else {
        console.log('!result: ', result);
        callback(null, result);
      }
    });
  },

  // a function which can be used to insert a message into the database
  create: function (input, callback) {
    // Insert message into message table
    db.connection.query(`SELECT id FROM users WHERE username = "${input.username}";`, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log('before insert');
        db.connection.query(`INSERT INTO messages (message, roomname, user_id) VALUES ("${input.message}", "${input.roomname}", ${result[0].id});`);
        console.log('after insert');
        callback();
      }
    });
  }
};

// db.query(`INSERT INTO messages (message, roomname) VALUES (${input.message}, ${input.roomname});`);