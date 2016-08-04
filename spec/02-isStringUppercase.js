
import { expect } from 'chai';
import stringUpper from '../02-isStringUpperCase/02-isStringUpperCase';

describe.only('stringUpper()', function () {
  it('should be a function', function () {
    expect(stringUpper).to.be.a('function');
  });
  it('takes one argument', function () {
    expect(stringUpper.length).to.equal(1);
  });
  it('returns a boolean', function () {
    expect(stringUpper('string')).to.equal(false);
  });
  it('return a true for HELLO', function () {
    expect(stringUpper('HELLO')).to.equal(true);
  });
  it('return a false for Hello', function () {
    expect(stringUpper('Hello')).to.equal(false);
  });
  it('return a false for HeLLo', function () {
    expect(stringUpper('HeLLo')).to.equal(false);
  });
  it('return a false for HeLLo', function () {
    expect(stringUpper('HeLLo')).to.equal(false);
  });
  it('return a false for HeLLo', function () {
    expect(stringUpper('He£££Lo')).to.equal('Invalid input');
  });
});

