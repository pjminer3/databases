DROP DATABASE chat;
CREATE DATABASE chat;

USE chat; 

CREATE TABLE messages (
  id INTEGER AUTO_INCREMENT,
  message CHAR(250) NOT NULL,
  updatedAt TIMESTAMP NULL DEFAULT NULL,
  id_ROOMS INTEGER NOT NULL,
  id_USERS INTEGER NOT NULL,
  PRIMARY KEY (id) 
  /* Describe your table here.*/
);

CREATE TABLE users (
  id INTEGER NOT NULL AUTO_INCREMENT,
  userName CHAR(25) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE rooms (
  id integer auto_increment,
  roomName char(25) NOT NULL,
  PRIMARY KEY (id)
);



ALTER TABLE messages ADD FOREIGN KEY (id_ROOMS) REFERENCES rooms(id);
ALTER TABLE messages ADD FOREIGN KEY (id_USERS) REFERENCES users(id);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

