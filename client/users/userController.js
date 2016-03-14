angular.module('juju', [])
.controller('usersCtrl', function($scope){
  $scope.user={};
  $scope.user.email;
  $scope.user.phonenumber;
  $scope.user.username;
  $scope.user.fbuid=Auth.userId;
});
