/* ./test/index.js */

const dataset   = [10, 7, 5, 8, 11, 9]

var solved = require('../solved');
var chai = require('chai'); // Only required for headless testing - "> mocha"
var assert = chai.assert;

describe('Input Dataset Validation', function() {
  it('dataset has a .length of XX', function() {;
    assert.equal(dataset.length, 6);
  });
  it('last dataset element is 9', function() {
    assert.equal(dataset[dataset.length-1], 9);
  });
});

describe('Computed Results Validation', function() {
  var output = solved( [10, 7, 5, 8, 11, 9] );
  it('Max profit is 6', function() {
    assert.equal(output[0], 6);
  });
  it('Buy stock price is 5', function() {
    assert.equal(output[1], 5);
  });
  it('Sell stock price is 11', function() {
    assert.equal(output[2], 11);
  });
});

