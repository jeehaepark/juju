describe('Authentication operations', function(){
  var Auth;

  beforeEach(module('juju'));
  beforeEach(inject(function ($injector) {
    Auth = $injector.get('Auth');
  }));

  describe('authFactory', function(){
    it('returns an object', function(){
      expect(Auth).toBeDefined();
      expect(typeof Auth).toBe('object');
      expect(typeof Auth.isloggedIn).toBe('function');
    });
  });
});
