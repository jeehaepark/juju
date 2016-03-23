angular.module('juju.user', [])
.controller('usersCtrl', function($scope, User, Auth){
  $scope.alerts = [];
  
   $scope.addAlert = function(msgobj) {
    $scope.alerts.push(msgobj);
  };

  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };


  console.log('userCtrl Auth.userId',Auth.userId);
  Auth.isloggedIn()
  .then( function successCallback (userId) {
    $scope.user = userId;
    return User.getOneInfo(Auth.userId)
  }, function errorCallback (err) {
    console.log(err)
  })
  .then(
    function successCallback(res){
      $scope.userData = res.data[0];
    },function errorCallback(err){
      $scope.err = 'fail to load your data';
    });
  $scope.updateUserInfo = function(userId,userObj){
    console.log('clicked update + id',userId ,'obj :',userObj);
    var name = userObj.fbname;
    var firstName = name;
    if (firstName.indexOf(' ') >= 0) {
          firstName = name.split(' ').slice(0, -1).join(' ');
      }
    User.updateOneInfo(userId,userObj).then(
      function success(res) {
       $scope.addAlert( { type: 'success', msg: 'Well done! You successfully read this important alert message.' } );
        //  $("#btnSubmit").attr("disabled", false);
        //  $('#success').html("<div class='alert alert-success'>");
        //  $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
        //  $('#success > .alert-success').append(" "+ firstName +"!  <strong>Updated! </strong>");
        //  $('#success > .alert-success').append('</div>');

        
      },function error (err) {
        $scope.addAlert( { type: 'danger', msg: 'Sorry! Try it again' } );
        
      //  $('#success').html("<div class='alert alert-danger'>");
      //  $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
      //  $('#success > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!");
      //  $('#success > .alert-danger').append('</div>');


      });
  };
});
