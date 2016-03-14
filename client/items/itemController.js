angular.module('juju.item', [])
.controller('itemsCtrl', function($scope, Item, Auth, $state, displayItemsFactory){
  $scope.item={};
  $scope.item.createdDate=new Date();
  $scope.item.currentPrice;
  $scope.item.imageUrl;
  $scope.item.userId=Auth.userId;
  $scope.$watch('item.URL', _.debounce(function(newValue, oldValue){
    if(newValue){
      Item.scrapePicture(newValue).then(function successCallback(response){
        if(response.data === 'not a site'){
          alert("Not a usable site");
        }else{
          $scope.item.imageUrl= response.data.picture;
          $scope.item.currentPrice = response.data.price;
          console.log('success response: ', response)
        }
      }, function errorCallback(response){
        console.log("error response", response)
        
      })
    }
  }, 400));
  $scope.addItem = function(){
    if($scope.item.currentPrice === null || $scope.item.imageUrl === null){
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
  // $scope.displayItems = function() {
  //   // console.log('Auth.userId', Auth.userId)
  //   // displayItemsFactory.getItemData(Auth.userId.toString()).then(
  //   //   function successCallback(response){
  //   //     console.log(response);
  //   //     $scope.itemData = response.data;
  //   //   }, function errorCallback(err){
  //   //     console.log(err);
  //   //     $scope.err = "There was a problem loading your data";
  //   //   })
  // };
});
