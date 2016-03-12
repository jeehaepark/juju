angular.module('displayItemsController', [])

.controller('displayItemsController', function ($scope, displayItemsFactory, Auth){
  console.log('Auth.userId', Auth.userId)
  displayItemsFactory.getItemData(Auth.userId.toString()).then(
    function successCallback(response){
      console.log(response);
      $scope.itemData = response.data;
    }, function errorCallback(err){
      console.log(err);
      $scope.err = "There was a problem loading your data";
    })
})
