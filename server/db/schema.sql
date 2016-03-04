DROP DATABASE IF EXISTS juju;

CREATE DATABASE juju;

USE juju;


DROP TABLE IF EXISTS users;
CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  email VARCHAR(50) NOT NULL,
  phoneNumber VARCHAR(13),
  password VARCHAR(250) NOT NULL,
  userName VARCHAR(250) NOT NULL,
  PRIMARY KEY (ID)
);


DROP TABLE IF EXISTS items;
CREATE TABLE items (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  itemUrl VARCHAR(250) NOT NULL,
  itemImageUrl VARCHAR(250),
  currentPrice int(9),
  PRIMARY KEY (ID)
);


DROP TABLE IF EXISTS itemHistories;
CREATE TABLE itemHistories (
  id INT NOT NULL AUTO_INCREMENT,
  price INT(9),
  checkDate DATE,
  itemID INT NOT NULL,
  PRIMARY KEY (ID)
);


DROP TABLE IF EXISTS watchedItems;

CREATE TABLE watchedItems (
  id INT NOT NULL AUTO_INCREMENT,
  deadline DATE,
  ideaPrice INT(9),
  settlePrice int(9),
  priceReached BOOL,
  emailed BOOL,
  itemID INT NOT NULL,
  userID INT NOT NULL,
  PRIMARY KEY (ID)
);


ALTER TABLE itemHistories ADD FOREIGN KEY (itemID) REFERENCES items (ID);
ALTER TABLE watchedItems ADD FOREIGN KEY (itemID) REFERENCES items (ID);
ALTER TABLE watchedItems ADD FOREIGN KEY (userID) REFERENCES users (ID);

