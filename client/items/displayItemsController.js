angular.module('displayItemsController', [])
.controller('displayItemsCtrl', function ($scope, displayItemsFactory, Auth){
  //console.log('userId from displayItemsCtrl', Auth.userId);
  var user;
  Auth.isloggedIn()
  .then( function successCallback (userId) {
    $scope.user = userId;
    return displayItemsFactory.getItemData(userId)
  }, function errorCallback (err) {
  })
  .then(
    function successCallback(response) {
      console.log(response);
      $scope.itemData = response.data;
    }, function errorCallback(err) {
      console.log(err);
      $scope.err = 'There was a problem loading your data';
    })
  .then(
    function successCallback(response) {
      console.log($scope.user)
      return displayItemsFactory.getItemHistoryData($scope.user)
    })
  .then(
    function successCallback(response) {
      console.log(response.data)
      $scope.itemHistoryData = displayItemsFactory.organizeData(response.data);
    });

  $scope.update = function (itemId , itemObj) {
    displayItemsFactory.updateData(itemId, itemObj);
  };  
    
  $scope.deleteWatched = function(itemId){
    displayItemsFactory.deleteData(itemId);
  };

  console.log('userId' , $scope.user)
  $scope.itemHistory = function () {
      displayItemsFactory.getItemHistoryData($scope.user)
    .then( function successCallback (data) {
      $scope.ItemHistoryData = data;
    })
  }
  
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };
});
