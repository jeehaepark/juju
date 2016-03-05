var app = angular.module('juju', ['ui.router', 'facebook'])
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
    .state('login', {
      url: '/login',
      views: {
        'body' : {
          templateUrl:'../templates/login.html'
        }
      },
      controller: 'fbAuthCtrl',
      // add auth options
    })
});
