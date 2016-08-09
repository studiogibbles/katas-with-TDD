import { expect } from 'chai';
import monkeyCount from '../01-countingMonkeys/01-countingMonkeys';


describe('stringUpper()', function () {
  it('should be a function', function () {
    expect(stringUpper).to.be.a('function');
  });
  it('takes one argument', function () {
    expect(stringUpper.length).to.equal(1);
  });
  it('expects 8 monkeys for [1,2,3,4,5,6,7,8]', function (){
    expect(monkeyCount(8)).to.eql([1,2,3,4,5,6,7,8]);
  });
});