CREATE TABLE users (
  id INTEGER PRIMARY KEY, 
  email VARCHAR(50) UNIQUE,
  phoneNumber VARCHAR(13),
  password VARCHAR(250),
  userName VARCHAR(250)
);

CREATE TABLE items (
  id INTEGER PRIMARY KEY,
  name VARCHAR(100),
  itemUrl VARCHAR(250),
  itemImageUrl VARCHAR(250),
  currentPrice INTEGER
);

CREATE TABLE itemHistories (
  id INTEGER PRIMARY KEY,
  price INTEGER,
  checkDate DATE,
  itemID INTEGER,
  FOREIGN KEY (itemID) REFERENCES items(id)
);

CREATE TABLE watchedItems (
  id INTEGER PRIMARY KEY,
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