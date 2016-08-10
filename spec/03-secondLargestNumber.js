import {expect} from 'chai';
import secondLargestNumber from '../03-secondLargestNumber/03-secondLargestNumber';


describe('secondLargestNumber()', function () {
  it('should be a function', function () {
    expect(secondLargestNumber).to.be.a('function');
  });
  it('takes one argument function', function () {
    expect(secondLargestNumber.length).to.equal(1);
  });
  it('returns a number', function () {
    expect(secondLargestNumber([0, 1, 2, 3, 2])).to.equal(2);
  });
  it('returns a second largest number in array', function () {
    expect(secondLargestNumber([1, 21, 11])).to.equal(11);
  });
  it('returns a second largest num when there\'s other shit going on', function () {
    expect(secondLargestNumber(['hello', {a: 55}, 1, 2, 3])).to.equal(2);
  });
});