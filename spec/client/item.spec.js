describe('Add item factory', function(){
  var Item;

  beforeEach(module('juju'));
  beforeEach(inject(function ($injector) {
    Item = $injector.get('Item');
  }));

  describe('Item Factory', function(){
    it('is defined', function(){
      expect(Item).toBeDefined();
    });

    it('returns an object', function(){
      expect(typeof Item).toBe('object');
    });

    // testing for only one method for now.  A passing test
    // should imply the rest of the methods are accessible
    it('has scrapePriceInfo method', function(){
      expect(typeof Item.scrapePriceInfo).toBe('function');
    });
  });
});
