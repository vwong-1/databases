var db = require('../db');

var connection = mysql.createConnection({
  user: 'root',
  password: 'pass',
  database: 'chat'
});
module.exports = {
  getAll: function () {
    // How to send this to server -- SELECT * FROM messages
    connection.connect();
    let result = db.query('SELECT * FROM messages;');
    connection.end();
    return result;
  }, // a function which produces all the messages
  create: function (input) {
    // Insert message into message table
    db.query('INSERT INTO messages (message, roomname, user_id) VALUES (input.message, input.roomname);');
  } // a function which can be used to insert a message into the database
};
