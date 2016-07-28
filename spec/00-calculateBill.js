/* global describe, it */

import { expect } from 'chai';
import CalculateBill from '../00-calculateBill/00-calculateBill';

describe('CalculateBill', function () {
  it('should be a function', function () {
    expect(CalculateBill).to.be.a('function');
  });
});
