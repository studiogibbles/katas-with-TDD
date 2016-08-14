import {expect} from 'chai';
import middleCharacter from '../05-middleCharacter/05-middleCharacter';

describe('middleCharacter()', function () {
  it('should be a function', function () {
    expect(middleCharacter).to.be.a('function');
  });
  it('should take one argument', function () {
    expect(middleCharacter).to.be.a('function');
  });
  it('returns str if less than 2 return', function (){
    expect(middleCharacter('o')).to.equal('o')
  });
  it('mid char in 3 word str', function (){
    expect(middleCharacter('toad')).to.equal('oa')
  });
  it('mid char in 3 word str', function (){
    expect(middleCharacter('toad')).to.equal('oa')
  });
  it('greater than 4 odd number word', function (){
    expect(middleCharacter('testing')).to.equal('t')
  });
});
