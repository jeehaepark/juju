describe('routes', function(){
  beforeEach(module('juju'));

  var state;
  describe('login route', function(){
    beforeEach(inject(function($state){
      state = $state.get('login');
    }));

    it('has the correct URL', function(){
      // state object has many more properties we can test
      expect(state.url).toEqual('/login');
    });

    it('renders the correct template', function(){
      expect(state.views.header.templateUrl).toEqual('./layout/header.html');
    });

    // TODO: test route params (ex: items/1);
  });

  describe('item route', function(){
    beforeEach(inject(function($state){
      state = $state.get('items');
    }));

    it('has the correct URL', function(){
      expect(state.url).toEqual('/yourItems');
    });
  });
});
