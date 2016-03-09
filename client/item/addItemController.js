angular.module('juju.addItem', [])
  .controller('addItemCtrl', function($scope, AddMe){ 
    $scope.item={};
    $scope.test='poop';
    $scope.item.createdDate=new Date();
    $scope.item.currentPrice;
    $scope.item.imageUrl;

    $scope.addItem = function(){
      AddMe.scrapePriceInfo($scope.item).then(function successCallback(response){
        console.log(response)
        $scope.item.imageUrl=response.data.picture;
        $scope.item.currentPrice=response.data.price;
        console.log($scope.item)
        AddMe.addItemToDB($scope.item);
      }, function errorCallback(response){
        console.log(response)

      });      
    }
  })