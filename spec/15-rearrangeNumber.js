import { expect } from 'chai';
import  rearrangeNumber from '../15-rearrangeNumber/15-rearrangeNumber';

describe('rearrangeNumber', function () {
  it('is a function', function () {
    expect(rearrangeNumber).to.be.a('function');
  });
  it('takes one arg', function () {
    expect(rearrangeNumber.length).to.equal(1);
  });
  it('returns null for a bullshit argument', function () {
    var test = 'foo';
    expect(rearrangeNumber(test)).to.equal(null);
  });
  it('returns null for a bullshit number', function () {
    var test = 9;
    expect(rearrangeNumber(test)).to.equal(null);
  });
  it('needs and integer', function () {
    var test = 2.5;
    expect(rearrangeNumber(test)).to.equal(null);
  });
});