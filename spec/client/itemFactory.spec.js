describe('Add item factory', function(){
  // var $scope;
  // var $rootScope;
  var AddItem;

  beforeEach(module('juju'));
  beforeEach(inject(function ($injector) {
    // $controller = $injector.get('$controller');
    // $rootScope = $injector.get('$rootScope');
    // $scope = $rootScope.$new();
    AddItem = $injector.get('AddItem');
  }));

  describe('addItemFactory', function(){
    it('returns an object', function(){
      expect(AddItem).toBeDefined();
      expect(typeof AddItem.addItemsFuncs).toBe('object');
    });
  });
});
