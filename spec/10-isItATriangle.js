/* global describe, it */

import { expect } from 'chai';
import  isItATriangle  from '../10-isItATriangle/10-isItATriangle';

describe('isItATrinagle', function (){
  it('is a function', function () {
    expect(isItATriangle).to.be.a('function');
  });
  it('takes 3 args', function () {
    expect(isItATriangle.length).to.equal(3);
  });
  it('returns a boolean', function () {
    expect(isItATriangle(3,  3, 3)).to.equal(true);
  });
  it('returns a boolean', function () {
    expect(isItATriangle(4, 3, 10)).to.equal(false);
  });
});