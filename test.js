w = require('./index');
should = require('should');

describe('node-word-array', function() {

  it('separates', function() {
    w('hey guys sup').should.eql(['hey', 'guys', 'sup'])
  })

  it('separates with alternative separator', function() {
    w('rio de janeiro_sao paulo', '_').should.eql(['rio de janeiro', 'sao paulo'])
  })

})