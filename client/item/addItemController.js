angular.module('juju.addItem', [])
  .controller('addItemCtrl', function($scope, AddMe){ 
    $scope.item={};
    $scope.test='poop';
    $scope.item.createdDate=new Date();
    $scope.item.currentPrice;
    $scope.item.imageUrl;
    $scope.$watch('item.URL', function(newValue, oldValue){
      if(newValue){
        console.log('poop poop poop', oldValue, newValue)
        AddMe.scrapePicture(newValue).then(function successCallback(response){
          console.log('respoonse', response)
          $scope.item.imageUrl= response.data.picture;
          console.log('omageurl', $scope.item.imageUrl)
        }, function errorCallback(response){
          console.log(response)
        })
      }
    })
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