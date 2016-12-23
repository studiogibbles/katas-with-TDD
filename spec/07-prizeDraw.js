import { expect } from 'chai';
import prizeDraw from '../07-prizeDraw/07-prizeDraw';

describe('prizeDraw()', function (){
  it('exists', function (){
    expect(prizeDraw).to.be.a('function');
  });
  it('takes one arg', function () {
    expect(prizeDraw.length).to.equal(1);
  });
  it('should return a string', function () {
    expect(prizeDraw(['anna', 'jack', 'zoe'])).to.be.a('string');
  });
  it('should return a zoe as a string', function () {
    expect(prizeDraw(['anna', 'jack', 'zoe'])).to.equal('zoe');
  });
});