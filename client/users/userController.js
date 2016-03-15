angular.module('juju.user', [])
.controller('usersCtrl', function($scope, userFactory){
  $scope.user={};
  $scope.user.email;
  $scope.user.phonenumber;
  $scope.user.username;
  // $scope.user.fbuid=Auth.userId;
  User.getOneInfo().then(
    function successCallback(res){
      $scope.userData = res.data;
    },function errorCallback(err){
      $scope.err = 'fail to load your data';
    });
});
