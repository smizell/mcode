var fs = require('fs');
var path = require('path');
var expect = require('chai').expect;

var mcode = require('../../lib/mcode');

describe('mcode', function() {
  describe('#msonToJson', function() {
    context('when given valid MSON', function() {
      var result;

      before(function(done) {
        var addMson = path.join(__dirname, '..', 'fixtures', 'addMson.md');
        var mson = fs.readFileSync(addMson).toString();
        mcode.msonToJson(mson, function(error, jsonResult) {
          result = jsonResult;
          done(error);
        });
      });

      it('returns the correct JSON', function() {
        expect(result).to.deep.equal(['!+', 5, 3]);
      });
    });
  });

  describe('#run', function() {
    context('when given valid MSON', function() {
      var result;

      before(function(done) {
        var addMson = path.join(__dirname, '..', 'fixtures', 'addMson.md');
        var mson = fs.readFileSync(addMson).toString();
        mcode.run(mson, function(error, jsonResult) {
          result = jsonResult;
          done(error);
        });
      });

      it('returns the correct JSON', function() {
        expect(result).to.equal(8);
      });
    });
  });
})
