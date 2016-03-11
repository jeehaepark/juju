var request = require('request');
var server = require('../../server/index.js');

var base_url = 'http://localhost:3000/';

describe('main page', function() {
  //check database?
  describe('GET /', function() {
    it('returns status code 200', function(done) {
      request.get(base_url, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it('should fine response.headers', function (done) {
      request.get(base_url,function(error, response, body){
        expect(response.statusCode).toBe(200);
        expect(response.headers.connection).toBe('close');
        done();
      });
    });
  });

  describe('GET /users', function() {
    it('load GET /users', function(done) {
      request.get('http://localhost:3000/api/users', function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it('should not return status code 200', function(done) {
      request.get('http://localhost:3000/api/users', function(error, response, body) {
        expect(body.success).not.toBe(false);
        expect(body).toBe('[]');
        done();
      });
    });
  });
});
