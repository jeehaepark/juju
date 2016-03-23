angular.module('displayItemsController', [])
.controller('displayItemsCtrl', function ($scope, displayItemsFactory, Auth, $uibModal){
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
  $scope.ok = function () {
    $uibModalInstance.close('hello');
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };

  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };

  $scope.open = function (size) {
    console.log('open called')
    console.log('size is ', size)
    var testingr = size;
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myModalContent.html',
      backdrop : false,//'/scripts/angular-ui-bootstrap/template/modal/backdrop.html',
      controller: 'ModalInstanceCtrl',
      //size: size,
      windowTemplateUrl : '/scripts/angular-ui-bootstrap/template/modal/window.html',
    //  scope: $scope.item = size ,
      resolve: {
        simpleObj : {value: size}
      }
    });
  };

})
.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, Auth , displayItemsFactory , simpleObj) {
  //console.log('testingr is', testingr)
  // $scope.items = items;
  // $scope.selected = {
  //   item: $scope.items[0]
  // };

  // $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
  // $scope.series = ['Series A', 'Series B'];
  // $scope.data = [
  //   [65, 59, 80, 81, 56, 55, 40],
  //   [28, 48, 40, 19, 86, 27, 90]
  // ];

  console.log(simpleObj.value)
  $scope.itemid = simpleObj.value;
  displayItemsFactory.getItemHistoryData(Auth.userId)
  .then(
    function successCallback(response) {
      console.log(response.data)
      $scope.itemHistoryData = displayItemsFactory.organizeData(response.data);
      console.log('orgdata is ', $scope.itemHistoryData)
    });
  $scope.ok = function () {
    $uibModalInstance.close();
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
