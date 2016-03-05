angular.module('facebook', [])

.controller('facebookCtrl', function ($scope ){
  $scope.test = "hello";
  $scope.facebookLogin = function () {
    var ref = new Firebase("https://jtimes3.firebaseio.com");
    ref.authWithOAuthPopup("facebook", function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);

      }
    });
  }
 

})

.factory('facebookFactory', function(){
 // var authData = 

})