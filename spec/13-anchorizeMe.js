import { expect } from 'chai';
import  anchorizeMe from '../13-anchorizeMe/13-anchorizeMe';

describe('anchorizeMe', function () {
  it('is a function', function () {
    expect(anchorizeMe).to.be.a('function');
  });
  it('takes a string', function () {
    var test = 1;
    expect(anchorizeMe(test)).to.equal(undefined)
  });
  it('takes one argument', function () {
    expect(anchorizeMe.length).to.equal(1);
  });
  it('returns \'unsupported porotocols\' if no protocols found', function () {
    var test = 'hello hgfp://world.com';
    expect(anchorizeMe(test)).to.equal('Unsupported protocols');
   });
  it('returns the correct answer', function () {
    var quest = 'click me this this! http://world.com';
    var ans = '\<a href="http://world.com>click me this this!"</a>';
    expect(anchorizeMe(quest)).to.equal(ans)
  });
  it('returns the correct answer', function () {
    var quest = 'click! http://world.com';
    var ans = '\<a href="http://world.com>click!"</a>';
    expect(anchorizeMe(quest)).to.equal(ans)
  });
  it('returns the correct answer for https', function () {
    var quest = 'click! https://world.com';
    var ans = '\<a href="ftp://world.com>click!"</a>';
    expect(anchorizeMe(quest)).to.equal(ans)
  });
});