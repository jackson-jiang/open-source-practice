var champion = require('./index.js')
var expect =require('chai').expect;

describe('champion-names', function() {
  it('共5个国家', function() {
    expect(champion.all().length).to.equal(5);
  });
  it('should contain `巴西`', function() {
    expect(champion.all()).to.include('巴西');
  });
  it('should contain `巴西`', function() {
    expect(champion.all()).to.include(champion.champion());
  });
});