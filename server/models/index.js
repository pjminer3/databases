var db = require('../db');

module.exports = {
  messages: {
    get: function () {
      // open conneciton
      db.connect(function(err) {
        if (err) {
          console.log('There was an error connect to Database: messages GET');
        } else {
          console.log('Connected!');
        }
      });
      
      // query database
      db.query('SELECT * FROM messages', function(err, rows, fields) {
        if (err) {
          console.log('There was an error querying the database');
        } else {
          console.log('Query successful');
        }
      });
      
      //close connection
      db.end();
      
    }, // a function which produces all the messages
    post: function (messageObj) {
      // open conneciton
      db.connect(function(err) {
        err ? console.log('There was an error connect to Database: messages POST') : console.log('Connected!');
      });
      
      // Insert message into message table with message.text, createdAt value, userID and roomID
      db.query('INSERT INTO messages (message, createdAt, id_ROOMS, id_USERS) VALUES (?, ?, ?, ?)', [messageObj.text, messageObj.createdAt, 1, 1], function(err, row, fields) {
        if (err) { // add ??? []
          console.log('There was an error POSTing to the database: ', err);
        } else {
          console.log('New message POST successful');
        }
      });
      db.end();
      
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (userName) {
      // open conneciton
      db.connect(function(err) {
        err ? console.log('There was an error connect to Database: messages POST') : console.log('Connected!');
      });
      
      // Insert user into users table with roomname
      db.query('INSERT INTO users (userName) VALUES (?)', [userName], function(err, row, fields) {
        if (err) { 
          console.log('There was an error POSTing a new user to the database: ', err);
        } else {
          console.log('New user POST successful');
        }
      });
      
      //close connection
      db.end();
    }
  }, 
  
  rooms: {
    get: function() {},
    post: function(roomName) {
      // open conneciton
      db.connect(function(err) {
        err ? console.log('There was an error connect to Database: messages POST') : console.log('Connected!');
      });
      
      // Insert room into rooms table with roomname
      db.query('INSERT INTO rooms (roomName) VALUES (?)', [roomName], function(err, row, fields) {
        if (err) { // add ??? []
          console.log('There was an error POSTing a new room to the database: ', err);
        } else {
          console.log('New room POST successful');
        }
      });
      
      //close connection
      db.end();
    }
  }
};

// POST NEW ROOM
// module.exports.rooms.post('lobby'); // SUCCESS

// POST NEW USER
// module.exports.users.post('Bernard'); // SUCCESS

/// QUERY WAS SUCCESSFUL
// module.exports.messages.post({text: 'hey', createdAt: 'now'}); // SUCCESS



