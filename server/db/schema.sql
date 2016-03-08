DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
  id SERIAL PRIMARY KEY, 
  email VARCHAR(50) UNIQUE,
  phoneNumber VARCHAR(13),
  password VARCHAR(250),
  userName VARCHAR(250) UNIQUE
);


DROP TABLE IF EXISTS items CASCADE;

CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  itemUrl VARCHAR(250),
  itemImageUrl VARCHAR(250),
  currentPrice INTEGER
);


DROP TABLE IF EXISTS itemHistories CASCADE;

CREATE TABLE itemHistories (
  id SERIAL PRIMARY KEY,
  price INTEGER,
  checkDate DATE,
  itemID INTEGER,
  FOREIGN KEY (itemID) REFERENCES items(id)
);

DROP TABLE IF EXISTS watchedItems CASCADE;

CREATE TABLE watchedItems (
  id SERIAL PRIMARY KEY,
  deadline DATE,
  idealPrice INTEGER,
  settlePrice INTEGER,
  priceReached BOOLEAN,
  emailed BOOLEAN,
  itemID INTEGER,
  userID INTEGER,
  FOREIGN KEY (itemID) REFERENCES items(id),
  FOREIGN KEY (userID) REFERENCES users(id)
);