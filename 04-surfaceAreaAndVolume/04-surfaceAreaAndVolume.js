import { expect } from 'chai';
import surfaceArea from '../01-countingMonkey/01-countingMonkeys';

describe.only('surfaceArea()', function () {
  it('should be a function', function () {
    expect(surfaceArea).to.be.a('function');
  });
  it('takes three arguments', function (){
    expect(surfaceArea.length).to.equal(3)
  });
  it('should return an object', function () {
    var test = {};
    expect(surfaceArea(test)).to.be.instanceOf(Object)
  });
});