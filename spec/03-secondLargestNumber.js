import { expect } from 'chai';
import secondLargestNumber from '../03-secondLargestNumber/03-secondLargestNumber';


describe.only('secondLargestNumber()', function () {
  it('should be a function', function () {
    expect(secondLargestNumber).to.be.a('function');
  });
  it('takes one argument function', function () {
    expect(secondLargestNumber.length).to.equal(1);
  });
  it('returns a number', function () {
    expect(secondLargestNumber([0,1,2,3])).to.equal(0);
  });
});