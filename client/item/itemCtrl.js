angular.module('juju.addItem', [])
.controller('itemCtrl', function($scope, AddItem){
  $scope.item = {};
  $scope.item.createdDate = new Date();
  $scope.item.currentPrice;
  $scope.item.imageUrl;
  $scope.$watch('item.URL', function(newValue, oldValue){
    if(newValue){
      AddItem.scrapePicture(newValue).then(function successCallback(response){
        $scope.item.imageUrl = response.data.picture;
        $scope.item.currentPrice = response.data.price;
      }, function errorCallback(response){
      })
    }
  })
  $scope.addItem = function(){
    if($scope.item.currentPrice || $scope.item.imageUrl){
      AddItem.scrapePriceInfo($scope.item).then(function successCallback(response){
        $scope.item.imageUrl=response.data.picture;
        $scope.item.currentPrice=response.data.price;
        AddItem.addItemToDB($scope.item);
      }, function errorCallback(response){
        // TODO: throw or console.log error
      });
    } else {
      AddItem.addItemToDB($scope.item);
    }
  }
})
