import { expect } from 'chai';
import findMissing from '../00b-findmissing/00b-findmissing';

describe.only('findMissing()', function  () {

  it('exists', function () {
    expect(findMissing).to.be.a('function');
  });
  it('takes one argument ', function () {
    expect(findMissing.length).to.equal(1);
  });
  it('returns an number', function () {
    expect(findMissing([])).to.be.a('number');
  });
  it('returns 7 for [1,2,3,4,5,6,8,9]', function (){
    expect(findMissing([1,2,3,4,5,6,8,9,10])).to.equal(7);
  });
  it('returns 1 for [1,2,3,4,5,6,8,9]', function (){
    expect(findMissing([2,3,4,5,6,7,8,9,10])).to.equal(1);
  });
});