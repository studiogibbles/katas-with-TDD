import { expect } from 'chai';
import  addErr from '../16-addErr/16-addErr';

describe('rearrangeNumber', function () {
  it('is a function', function () {
    expect(addErr).to.be.a('function');
  });
  it('takes one arg', function () {
    expect(addErr.length).to.equal(1);
  });
});
