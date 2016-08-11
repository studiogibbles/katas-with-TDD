import {expect} from 'chai';
import middleCharacter from '../05-middleCharacter/05-middleCharacter';

describe.only('middleCharacter()', function () {
  it('should be a function', function () {
    expect(middleCharacter).to.be.a('function');
  });
  it('should take one argument', function () {
    expect(middleCharacter).to.be.a('function');
  });
  it('should return a string', function () {
    var test = "o";
    expect(middleCharacter(test)).to.be.a('string');
  });
  it('returns str if less than 2 return', function (){
    expect(middleCharacter('o')).to.equal('o')
  });
});