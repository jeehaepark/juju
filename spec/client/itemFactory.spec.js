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
    it('is definedt ', function(){
      expect(AddItem).toBeDefined();
    });
    it('returns an object', function(){
      expect(typeof AddItem.addItemsFuncs).toBe('object');
    });
  });
});
