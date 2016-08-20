import { expect } from 'chai';
import sumOfMultiples from '../06-sumOfMultiples/06-sumOfMultiples';

describe.only('sumofMultiples()', function (){
  it('exists', function (){
    expect(sumOfMultiples).to.be.a('function');
  });
  it('takes two arguments', function (){
    expect(sumOfMultiples.length).to.equal(2);
  });
  it('returns 23 for 10', function () {
      expect(sumOfMultiples(10)).to.equal(23);
  });






});