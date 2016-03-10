describe('Item controller', function(){
  var $scope;
  var $rootScope;
  var createController;
  var $controller;

  beforeEach(module('juju'));
  beforeEach(inject(function ($injector) {
    $controller = $injector.get('$controller');
    $rootScope = $injector.get('$rootScope');
    $scope = $rootScope.$new();

    createController = function() {
      return $controller('itemCtrl', {
        $scope: $scope,
        Auth: Auth
      });
    };
    createController();
  }));

  describe('itemCtrl', function(){
    it('has addItem function', function(){
      expect($scope.addItem).toBeDefined();
      expect(typeof $scope.addItem).toBe('function');
    });
  });
});
