var should = require('should');


describe('karma tests with should', function(){
  var user={
    name: 'foo'
  };
  //smoke test that should pass
  it('should have a name', function(){
    user.should.have.property('name', 'foo');
  });
  //smoke test that should fail
  it('should have a candy', function(){
    user.should.have.property('candy', 'yum!');
  });
});