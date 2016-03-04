CREATE DATABASE juju19;

USE juju19;


DROP TABLE IF EXISTS users;
        
CREATE TABLE users (
 id int NOT NULL AUTO_INCREMENT,
 email VARCHAR(50) NOT NULL,
 phoneNumber VARCHAR(13),
 password VARCHAR(250) NOT NULL,
 userName VARCHAR(250) NOT NULL,
 PRIMARY KEY (ID)
);

-- ---
-- Table 'items'
-- 
-- ---

DROP TABLE IF EXISTS items;
        
CREATE TABLE items (
 id int NOT NULL AUTO_INCREMENT,
 name VARCHAR(100) NOT NULL,
 itemUrl VARCHAR(250) NOT NULL,
 itemImageUrl VARCHAR(250),
 currentPrice int(9),
 PRIMARY KEY (ID)
);

-- ---
-- Table 'itemHistories'
-- 
-- ---

DROP TABLE IF EXISTS itemHistories;
        
CREATE TABLE itemHistories (
 id int NOT NULL AUTO_INCREMENT,
  price int(9),
 checkDate DATE,
 item_id int NOT NULL,
 PRIMARY KEY (ID)
);

-- ---
-- Table 'watchedItems'
-- 
-- ---

DROP TABLE IF EXISTS watchedItems;
        
CREATE TABLE watchedItems (
 id int NOT NULL AUTO_INCREMENT,
 deadline DATE,
 ideaPrice INT(9),
 settlePrice int(9),
 priceReached BINARY(1),
 emailed BINARY(1),
 item_id int NOT NULL,
 user_id int NOT NULL,
 PRIMARY KEY (ID)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE itemHistories ADD FOREIGN KEY (item_id) REFERENCES items (ID);
ALTER TABLE watchedItems ADD FOREIGN KEY (item_id) REFERENCES items (ID);
ALTER TABLE watchedItems ADD FOREIGN KEY (user_id) REFERENCES users (ID);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `items` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `itemHistories` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `watchedItems` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `users` (`id`,`email`,`phoneNumber`,`password`,`userName`) VALUES
-- ('','','','','');
-- INSERT INTO `items` (`id`,`name`,`itemUrl`,`itemImageUrl`,`currentPrice`) VALUES
-- ('','','','','');
-- INSERT INTO `itemHistories` (`id`,`price`,`date`,`item_id`) VALUES
-- ('','','','');
-- INSERT INTO `watchedItems` (`id`,`deadline`,`ideaPrice`,`settlePrice`,`priceReached`,`emailed`,`item_id`,`users_id`) VALUES
-- ('','','','','','','','');