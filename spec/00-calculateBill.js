/* global describe, it */

import { expect } from 'chai';
import CalculateBill from '../00-calculateBill/00-calculateBill';

describe('CalculateBill', function () {
  it('should be a function', function () {
    expect(CalculateBill).to.be.a('function');
  });
  it('takes three arguments', function (){
    expect(CalculateBill.length).to.equal(3);
  });
  it('returns a string', function (){
    expect(CalculateBill(33.50)).to.be.a('string');
  });
  it('returns £135 for 100, 20 and 15 ', function (){
    expect(CalculateBill(100,20,15)).to.equal('£135.00')
  });
  it('returns £200 for 100, 20 and 15 ', function (){
    expect(CalculateBill(100,20,15)).to.equal('£235.00')
  });
  it('returns £135 for 100, 20 and 15 ', function (){
    expect(CalculateBill(100,50,15)).to.equal('£165.00')
  });
  it('returns £335 for 300, 20 and 15 ', function (){
    expect(CalculateBill(300,20,15)).to.equal('£335.00')
  });
  it('converts strings to numbers', function (){
    expect(CalculateBill())
  });
});
