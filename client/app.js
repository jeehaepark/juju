var app = angular.module('juju', ['ui.router', 'facebook', 'authFactory', 'juju.addItem','addItemFactory'])
app.config(function ($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/login');

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
      },
      authenticate: true
    })
    .state('additems', {
      url: '/additems',
      views : {
        'body' : {
          templateUrl:'./item/additem.html'
        },
        "header" : {
          templateUrl: './layout/header.html'
        }
      },
      controller: 'addItemCtrl',
      authenticate: true
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
      controller: 'fbAuthCtrl'
      // add auth options
    })
})
.run(function($rootScope, $state, Auth){
  $rootScope.$on('$stateChangeStart', function (event, toState, toParams){
    console.log(Auth.isloggedIn())
    if(!Auth.isloggedIn()  && toState.authenticate){
      event.preventDefault();
      $state.go('login')
    }
  })
});
