/* global descirbe, it */

import { expect } from 'chai';
import  intializeName  from '../09-initializeName/09-initializeName';


describe('intializeName', function () {
  it('is a function', function () {
    expect(intializeName).to.be.a('function')
  });
  it('takes one argument', function () {
    expect(intializeName.length).to.equal(1);
  });
  it('returns a Jack J. M. T. Ryan', function () {
    expect(intializeName('Jack John Micahel Turner Ryan')).to.equal('Jack J. M. T. Ryan');
  });
  it('returns a Jack J. M. Ryan', function () {
    expect(intializeName('Jack John Micahel Ryan')).to.equal('Jack J. M. Ryan');
  });
});