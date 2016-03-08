describe('Smoke Test', function(){
  var $scope;
  var $rootScope;
  var Auth;
  var createController;
  var $controller;

  beforeEach(module('juju'));
  beforeEach(inject(function ($injector) {
    $controller = $injector.get('$controller');
    $rootScope = $injector.get('$rootScope');
    $scope = $rootScope.$new();
    Auth = $injector.get('Auth');

    createController = function() {
      return $controller('fbAuthCtrl', {
        $scope: $scope,
        Auth: Auth
      });
    };
    createController();
  }));

  describe('fbAuthCtrl', function(){
    it('has a facebookLogin function', function(){
      expect($scope.facebookLogin).toBeDefined();
      expect(typeof $scope.facebookLogin).toBe('function');
    });
  });

  describe('authService', function(){
    it('returns an object', function(){
      expect(Auth).toBeDefined();
      expect(typeof Auth).toBe('object');
      expect(typeof Auth.isloggedIn).toBe('function');
    });
  });
});
