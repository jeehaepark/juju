angular.module('juju.item', ['authFactory'])
.controller('itemCtrl', function($scope, Item, Auth){
  $scope.item={};
  $scope.test='poop';
  $scope.item.createdDate=new Date();
  $scope.item.currentPrice;
  $scope.item.imageUrl;
  $scope.item.userId=Auth.userId;
  $scope.$watch('item.URL', function(newValue, oldValue){
    if(newValue){
      Item.scrapePicture(newValue).then(function successCallback(response){
        $scope.item.imageUrl= response.data.picture;
        $scope.item.currentPrice = response.data.price;
      }, function errorCallback(response){
        console.log(response);
      })
    }
  });
  $scope.addItem = function(){

    if($scope.item.currentPrice || $scope.item.imageUrl){
      Item.scrapePriceInfo($scope.item)
      .then(function successCallback(response){
        console.log(response);
        $scope.item.imageUrl=response.data.picture;
        $scope.item.currentPrice=response.data.price;
        console.log('scope.item is ' , $scope.item);
        Item.addItemToDB($scope.item)
        .then(function successCallback(response) { 
          console.log('omg we made it')
          $state.go('items');
        });
      }, function errorCallback(response){
        console.log(response);
      });
    }else {
      Item.addItemToDB($scope.item);
    }
  };
});
