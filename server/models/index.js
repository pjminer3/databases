var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      let queryMessages = 'SELECT * FROM messages';

      // query database
      db.query(queryMessages, function(err, results, fields) {
        if (err) {
          console.log('There was an error querying the database');
        } else {
          console.log('Query successful: ');
          callback(results);
        }
      });
      
    }, // a function which produces all the messages
    post: function (messageObj) {
      // Insert message into message table with message.text, createdAt value, userID and roomID
      db.query('INSERT INTO messages (message, id_ROOMS, id_USERS) VALUES (?, ?, ?)', [messageObj.text, 1, 1], function(err, row, fields) {
        if (err) { // add ??? []
          console.log('There was an error POSTing to the database: ', err);
        } else {
          console.log('New message POST successful');
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (userName) {
      // Insert user into users table with roomname
      db.query('INSERT INTO users (userName) VALUES (?)', [userName], function(err, row, fields) {
        if (err) { 
          console.log('There was an error POSTing a new user to the database: ', err);
        } else {
          console.log('New user POST successful');
        }
      });
    }
  }, 
  
  rooms: {
    get: function() {},
    post: function(roomName) {
      // Insert room into rooms table with roomname
      db.query('INSERT INTO rooms (roomName) VALUES (?)', [roomName], function(err, row, fields) {
        if (err) { // add ??? []
          console.log('There was an error POSTing a new room to the database: ', err);
        } else {
          console.log('New room POST successful');
        }
      });
    }
  }
};

// POST NEW ROOM
// module.exports.rooms.post('lobby'); // SUCCESS

// POST NEW USER
// module.exports.users.post('Bernard'); // SUCCESS

/// QUERY WAS SUCCESSFUL
module.exports.messages.get(); // SUCCESS



