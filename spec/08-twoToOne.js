import { expect } from 'chai';
import twoToOne from '../08-twoToOne/08-twoToOne';

describe('twoToOne()', function () {
  it('is a function', function () {
    expect(twoToOne).to.be.a('function');
  });
  it('takes two args', function () {
    expect(twoToOne.length).to.equal(2);
  });
  it('should return abc from aaaa bbbbc', function () {
    expect(twoToOne('aaaa','bbbbc')).to.equal('abc');
  })
});