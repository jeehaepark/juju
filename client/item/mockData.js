angular.module('displayItemController', [])

.controller('displayItemController', function ($scope){
  $scope.itemData = [
    {
      "id": 1,
      "name": "photo",
      "itemurl": "www.photo.com",
      "itemimageurl": "www.photo.com",
      "currentprice": 9000
    },
    {
      "id": 2,
      "name": "alexa",
      "itemurl": "http://www.amazon.com/Amazon-SK705DI-Echo/dp/B00X4WHP5E/ref=sr_1_1?ie=UTF8&qid=1457566674&sr=8-1&keywords=alexa",
      "itemimageurl": null,
      "currentprice": null
    },
    {
      "id": 3,
      "name": "alexa",
      "itemurl": "http://www.amazon.com/Amazon-SK705DI-Echo/dp/B00X4WHP5E/ref=sr_1_1?ie=UTF8&qid=1457566674&sr=8-1&keywords=alexa",
      "itemimageurl": null,
      "currentprice": null
    },
    {
      "id": 4,
      "name": "alexa",
      "itemurl": "http://www.amazon.com/Amazon-SK705DI-Echo/dp/B00X4WHP5E/ref=sr_1_1?ie=UTF8&qid=1457566674&sr=8-1&keywords=alexa",
      "itemimageurl": "http://ecx.images-amazon.com/images/I/51z7j2JesHL._SY300_.jpg",
      "currentprice": 100
    },
    {
      "id": 5,
      "name": "미숫가루",
      "itemurl": "http://www.amazon.com/HEALTH-Korea-Grains-Powder-Mixed/dp/B00GKC9SK0/ref=sr_1_1_a_it?ie=UTF8&qid=1457567982&sr=8-1&keywords=%EB%AF%B8%EC%88%AB%EA%B0%80%EB%A3%A8",
      "itemimageurl": "http://ecx.images-amazon.com/images/I/517jVvXAUDL._SY300_QL70_.jpg",
      "currentprice": 40
    },
    {
      "id": 6,
      "name": "blender",
      "itemurl": "http://www.amazon.com/BlenderBottle-ProStak-22-Ounce-Bottle-Storage/dp/B00IOO2YSK/ref=sr_1_4?ie=UTF8&qid=1457568188&sr=8-4&keywords=shaker+bottle",
      "itemimageurl": "http://ecx.images-amazon.com/images/I/4131ww9uQxL._SY300_QL70_.jpg",
      "currentprice": 8
    },
    {
      "id": 7,
      "name": "markers",
      "itemurl": "http://www.amazon.com/Pentel-Color-Pen-Assorted-S360-36/dp/B001E6F108/ref=sr_1_5?ie=UTF8&qid=1457569567&sr=8-5&keywords=markers",
      "itemimageurl": "http://ecx.images-amazon.com/images/I/51bRSRfLHbL._SY300_QL70_.jpg",
      "currentprice": 9
    }
  ]

});
