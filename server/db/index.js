var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

module.exports = {
  connection: mysql.createConnection({
    user: 'root',
    password: 'pass',
    database: 'chat'
  })
};

module.exports.connection.connect( () => (console.log('connected')));

// module.exports.connection.connect( () => (console.log('connected')));
// module.exports.connection.query('INSERT INTO messages (message, roomname) VALUES ("message test", "test Room" );');
// module.exports.connection.end();