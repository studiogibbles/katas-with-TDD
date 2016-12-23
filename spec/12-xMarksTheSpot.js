/* global describe, it */

import { expect } from 'chai';
import  xMarks from '../12-xMarksTheSpot/12-xMarksTheSpot';

describe('xMarks', function () {
  it('is a function', function () {
    expect(xMarks).to.be.a('function');
  });
  it('takes one argument', function () {
    expect(xMarks.length).to.equal(1);
  });
  it('returns the correct ans', function () {
    var test = [ ['a', 'b', 'c'],
      ['o', 'v', 'b'],
      ['x', 'u', 'o'] ];
    expect(xMarks(test)).to.eql([2,0]);
  });
  it('returns the correct ans', function () {
    var test = [ ['o', 'x'],
      ['o', 'o'] ];
    expect(xMarks(test)).to.eql([0,1]);
  });
});