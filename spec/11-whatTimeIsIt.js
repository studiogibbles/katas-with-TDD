/* global describe, it */

import { expect } from 'chai';
import  whatTimeIsIt  from '../11-whatTimeIsIt/11-whatTimeIsIt';

describe('whatTimeIsIt', function () {
  it('is a function', function (){
    expect(whatTimeIsIt).to.be.a('function');
  });
  it('takes one arg' , function () {
    expect(whatTimeIsIt.length).to.equal(1);
  });
  it('expect correct time ', function () {
    expect(whatTimeIsIt('12:00:00AM')).to.equal('00:00:00');
  });
  it('expect correct time ', function () {
    expect(whatTimeIsIt('12:00:00AM')).to.equal('00:00:00');
  });
  it('expect correct time ', function () {
    expect(whatTimeIsIt('09:25:11AM')).to.equal('09:25:11');
  });
  it('expect correct time ', function () {
    expect(whatTimeIsIt('06:05:00PM')).to.equal('18:05:00');
  });
});
