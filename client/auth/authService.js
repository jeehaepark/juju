angular.module('authService', [])

.factory('Auth', function ($window, $http){
 var loggedIn;

  return {
    isloggedIn : function () {
      loggedIn = $window.localStorage.getItem('firebase:session::jtimes3');
      // return a boolean value of whether or not logged in is defined 
      return !!loggedIn;  
    },
    logOut : function () {

      $window.localStorage.removeItem('firebase:host:jtimes3.firebaseio.com');
      $window.localStorage.removeItem('firebase:session::jtimes3');
      loggedIn=$window.localStorage.getItem('firebase:session::jtimes3');
      console.log("loggedIn", !!loggedIn);
      return $window.localStorage.removeItem('firebase:session::jtimes3');
    },
    addUserToDB : function(authData){
      data = {
        FBuID : authData.facebook.id,
        userName : authData.facebook.displayName
      };
      //edge case, what if someone changes their display name?
      console.log('sending post from client route');
      return $http({
        method: 'POST',
        url: 'api/users',
        data: data
      })
    }
  }
});
