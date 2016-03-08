angular.module('juju.addItem', [])
  .controller('addItemCtrl', function($scope, AddMe){ 
    $scope.item={};
    $scope.test='poop';
    $scope.item.createdDate;
    $scope.item.currentPrice;
    $scope.item.imageUrl;

    $scope.addItem = function(){

      console.log('adding item!!!', $scope.item)
      //get the imageUrl from the item url
      //get the current price info from the item url
      //AddMe.addItemToDB($scope.item)
    }
  })