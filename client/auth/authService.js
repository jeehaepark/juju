angular.module('authService', [])

.factory('Auth', function ($window){
 var loggedIn;

  return {
    isloggedIn : function () {
      loggedIn = $window.localStorage.getItem('firebase:session::jtimes3');
      // return a boolean value of whether or not logged in is defined 
      return !!loggedIn;  
    },
    logOut : function () {
      return $window.localStorage.removeItem('firebase:session::jtimes3');
    }
  }
});