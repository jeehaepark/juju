drop database if exists fire;
create database fire;

-- DROP TABLE if exists users CASCADE;


CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN);



-- CREATE TABLE users (
--   id INTEGER PRIMARY KEY, 
--   email VARCHAR(50) UNIQUE,
--   phoneNumber VARCHAR(13),
--   password VARCHAR(250),
--   userName VARCHAR(250) UNIQUE
-- );

-- DROP TABLE if exists items CASCADE;

-- CREATE TABLE items (
--   id INTEGER PRIMARY KEY,
--   name VARCHAR(100),
--   itemUrl VARCHAR(250),
--   itemImageUrl VARCHAR(250),
--   currentPrice INTEGER
-- );

-- DROP TABLE if exists itemHistories CASCADE;

-- CREATE TABLE itemHistories (
--   id INTEGER PRIMARY KEY,
--   price INTEGER,
--   checkDate DATE,
--   itemID INTEGER,
--   FOREIGN KEY (itemID) REFERENCES items(id)
-- );

-- DROP TABLE if exists watchedItems CASCADE;

-- CREATE TABLE watchedItems (
--   id INTEGER PRIMARY KEY,
--   deadline DATE,
--   idealPrice INTEGER,
--   settlePrice INTEGER,
--   priceReached BOOLEAN,
--   emailed BOOLEAN,
--   itemID INTEGER,
--   userID INTEGER,
--   FOREIGN KEY (itemID) REFERENCES items(id),
--   FOREIGN KEY (userID) REFERENCES users(id)
-- );