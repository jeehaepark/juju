angular.module('addItemFactory', [])

.factory('AddItem', function(Auth,$http){
  var addItemFuncs ={};
  //pull in user info from the auth factory
  addItemFuncs.addItemToDB =function (itemInfo){
    data={
      itemNickName : itemInfo.nickname,
      itemUrl : itemInfo.URL,
      itemImageUrl : itemInfo.imageUrl,
      currentPrice : itemInfo.currentPrice,
      idealPrice : itemInfo.idealPrice,
      createdDate : itemInfo.createdDate.toDateString()
    };

    return $http({
      method: 'POST',
      url: 'api/additems',
      data: data
    })
  },

  addItemFuncs.scrapePriceInfo = function(itemInfo){
    data = {
      url : itemInfo.URL
    };
    return $http({
      method : 'POST',
      url : '/scrape',
      data : data
    })
  },

  addItemFuncs.scrapePicture = function (url){
    data = {
      url : url
    };
    return $http({
      method : 'POST',
      url : '/scrape',
      data: data
    })
  }

  return addItemFuncs
})
.factory('displayItemsFactory', function ($http){
  displayItemsFactoryFuncts = {};

  displayItemsFactoryFuncts.getItemData = function(user){
    var data = {
      user: user
    }
    return $http({
      method : 'GET',
      url : '/api/v1/watchedItems/dummy',
      data: user
    })
  }
  return displayItemsFactoryFuncts;
})

