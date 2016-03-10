describe('Add item factory', function(){
  var AddItem;

  beforeEach(module('juju'));
  beforeEach(inject(function ($injector) {
    AddItem = $injector.get('AddItem');
  }));

  describe('addItemFactory', function(){
    it('is defined', function(){
      expect(AddItem).toBeDefined();
    });

    it('returns an object', function(){
      expect(typeof AddItem).toBe('object');
    });

    // testing for only one method for now.  A passing test
    // should imply the rest of the methods are accessible
    it('has scrapePriceInfo method', function(){
      expect(typeof AddItem.scrapePriceInfo).toBe('function');
    });
  });
});
