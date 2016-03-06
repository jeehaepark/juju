var app = angular.module('juju', ['ui.router', 'facebook'])
app.config(function ($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/default');

  $stateProvider
    .state('items', {
      url: '/yourItems',
      views: {
        "body" : {
          templateUrl:'./item/item.html'
        },
        "header" : {
          templateUrl: './layout/header.html'
        }
      }
    })
    .state('additems', {
      url: '/additems',
      views : {
        'body' : {
          templateUrl:'./item/additem.html'
        }
      }
    })
    .state('login', {
      url: '/login',
      views: {
        'header' : {
          templateUrl: './layout/header.html'
        },
        'body' : {
          templateUrl:'./auth/login.html'
        }
      },
      controller: 'fbAuthCtrl',
      // add auth options
    })
});
