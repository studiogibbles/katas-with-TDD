import { expect } from 'chai';
import sumOfMultiples from '../06-sumOfMultiples/06-sumOfMultiples';

describe.only('sumofMultiples()', function (){
  it('exists', function (){
    expect(sumOfMultiples).to.be.a('function');
  });
  it('takes two arguments', function (){
    expect(sumOfMultiples.length).to.equal(2);
  });
  it('returns the sum of multiple if 1st arg is true', function () {
      expect(sumOfMultiples).to.equal(true);
  });





});