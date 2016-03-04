USE juju;

INSERT INTO `users` (`email`,`phoneNumber`,`password`,`userName`) VALUES ('james@gmail.com', '949-466-4483', 'poop', 'hyoun44');

INSERT INTO `items` (`name`,`itemUrl`,`itemImageUrl`,`currentPrice`) VALUES ('shoe', 'www.shoes.com', 'www.shoephoto.com', 9000);
INSERT INTO `items` (`name`,`itemUrl`,`itemImageUrl`,`currentPrice`) VALUES ('photo', 'www.photo.com', 'www.photo.com', 9000);

INSERT INTO `itemHistories` (`price`,`checkdate`,`itemID`) VALUES ('10000', '03-11-2016', 1);
INSERT INTO `itemHistories` (`price`,`checkdate`,`itemID`) VALUES ('10000', '03-10-2016', 1);


INSERT INTO `watchedItems` (`deadline`,`ideaPrice`,`settlePrice`,`priceReached`,`emailed`,`itemID`,`userID`) VALUES ('04-01-2016', 7000, 8000, 1, 1, 1, 1);
INSERT INTO `watchedItems` (`deadline`,`ideaPrice`,`settlePrice`,`priceReached`,`emailed`,`itemID`,`userID`) VALUES ('04-01-2016', 8000, 8500, 0, 0, 2, 1);

