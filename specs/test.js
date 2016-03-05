describe('Smoke Test', function(){
  describe('independent tests', function() {
    it('true should be true', function(){
      expect(true).toBe(true);
    });
  });

  beforeEach(module('juju'));
  var $controller;

  beforeEach(inject(function (_$controller_) {
    $controller = _$controller_;
  }));

  it('has hello in $scope', function(){
    var $scope = {};
    var controller = $controller('AuthCtrl', { $scope: $scope});
    expect($scope.hello).toBe('helloworld');
  });
});


