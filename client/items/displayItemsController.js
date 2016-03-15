angular.module('displayItemsController', [])
.controller('displayItemsCtrl', function ($scope, displayItemsFactory, Auth){
  console.log('Auth.userId', Auth.userId);
  displayItemsFactory.getItemData(Auth.userId).then(
    function successCallback(response){
      console.log(response);
      $scope.itemData = response.data;
    }, function errorCallback(err){
      console.log(err);
      $scope.err = 'There was a problem loading your data';
    });

  // displayItemsFactoryFuncts.deleteData(item.id).then(function successCallback(response){
  //     console.log(response);
  //     $scope.itemData = response.data;
  //   }, function errorCallback(err){
  //     console.log(err);
  //     $scope.err = 'There was a problem loading your data';
  //   }
  // 	);
});
