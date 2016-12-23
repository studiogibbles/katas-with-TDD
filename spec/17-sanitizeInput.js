import { expect } from 'chai';
import sanitizeInput from '../17-sanitizeInput/17-sanitizeInput';

describe.only('sanitizeInput', function () {
  it('is a function', function () {
    expect(sanitizeInput).to.be.a('function');
  });
  it('takes one argument', function () {
    expect(sanitizeInput.length).to.equal(1);
  });
});
