USE juju;

INSERT INTO users (email,phoneNumber,FBuID,userName) VALUES ('james@gmail.com', '949-466-4483', 'poop', 'hyoun44');

INSERT INTO items (name,itemUrl,itemImageUrl,currentPrice) VALUES ('mug', 'http://www.amazon.com/The-Cottage-Industry-NA-Morning/dp/B005BR7JJM/ref=sr_1_2?s=kitchen&ie=UTF8&qid=1457658409&sr=1-2&keywords=mug', 'http://ecx.images-amazon.com/images/I/41FwckHUpJL._SX300_QL70_.jpg', '$4.88');

INSERT INTO itemHistories (price, checkDate, itemID) VALUES ('$10.08', '2016-03-08', 1);
INSERT INTO itemHistories (price,checkdate,itemID) VALUES ('$21.56', '2016-03-11', 1);
INSERT INTO itemHistories (price,checkdate,itemID) VALUES ('$53.11', '2016-03-10', 1);


INSERT INTO watchedItems (deadline,idealPrice,settlePrice,priceReached,emailed,itemID,userID) VALUES ('2016-04-01', '$15.00', '$19.98', false, false, 1, 1);
INSERT INTO watchedItems (deadline,idealPrice,settlePrice,priceReached,emailed,itemID,userID) VALUES ('2016-04-01', '$12.99', '$17.22', true, true, 2, 1);

