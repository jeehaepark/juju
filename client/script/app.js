//angular.module('juju', [])



var app = angular.module('juju', ['ui.router', 'facebook'])
app.controller('AuthCtrl', function($scope) {
  $scope.hello = "helloworld"
})

app.config(function ($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/default');

  $stateProvider
    .state('items', {
      url: '/yourItems',
      views: {
        "body" : {
          templateUrl:'../templates/item.html'
        },
        "header" : {
          templateUrl: '../templates/header.html'
        }
      }
    })
    .state('additems', {
      url: '/additems',
      views : {
        'body' : {
          templateUrl:'../templates/additem.html'
        }
      }
    })
});