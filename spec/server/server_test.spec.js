var request = require('request');
var server = require('../../server/index.js');

var base_url = 'http://localhost:3000/';
// var agent = request.agent(server.app);

describe('Hello World Server', function() {
  //check database?
  describe('GET /', function() {
    it('returns status code 200', function(done) {
      request.get(base_url, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    xit('should not return status code 200', function(done) {
      request.get('http://localhost:3000/api/v1/users', function(error, response, body) {
        expect(body).toBe('hello');
        done();
      });
    });

    xit('should deliver index.html content upon GET request to root directory.', function (done) {
      request.get(base_url,function(error, response, body){
        expect(response.statusCode).toBe(200);
        expect(response.ContentType).toBe('what is this?');
        done();
      })
        // .expect(200)
        // .expect('Content-Type', 'text/html; charset=UTF-8')
        // .expect('Content-Length', 603)
        // .then(function (res) {
        //   (res.text).should.be.a.String();
        //   done();
        // })
        // .catch(done);
    });
  });




  xdescribe('POST /', function() {
    it('returns status code 200', function(done) {
      request.get(base_url, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    xit('should not return status code 200', function(done) {
      request.get('http://localhost:3000/api/v1/users', function(error, response, body) {
        expect(response.statusCode).not.toBe(404);
        done();
      });
    });
  });
});