import { expect } from 'chai';
import sumOfMultiples from '../06-sumOfMultiples/06-sumOfMultiples';

describe.only('sumofMultiples()', function (){
  it('exists', function (){
    expect(sumOfMultiples).to.be.a('function');
  });
  it('takes two arguments', function (){
    expect(sumOfMultiples.length).to.equal(2);
  });
  it('returns 23 for 10 with predicate', function () {
    expect(sumOfMultiples(10, true)).to.equal(23);
  });
  it('returns 16 for 60 with predicate', function () {
    expect(sumOfMultiples(16, true)).to.equal(60);
  });


});