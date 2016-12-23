import { expect } from 'chai';
import  euro2016 from '../14-euro2016/14-euro2016';

describe('euro2016', function () {
  it('is a function', function () {
    expect(euro2016).to.be.a('function');
  });
  it('takes 2 arguments', function () {
    expect(euro2016.length).to.equal(2);
  });
  it('returns the ans for team1 win', function () {
    var arr1 = ['Germany', 'Ukraine'];
    var arr2 =[2, 0];
    var ans = 'At match Germany - Ukraine, Germany won!'
      expect(euro2016(arr1,arr2)).to.equal(ans);
  });
  it('returns the ans for team2 win', function () {
    var arr1 = ['Belgium', 'Italy'];
    var arr2 =[0, 2];
    var ans = 'At match Belgium - Italy, Italy won!';
    expect(euro2016(arr1,arr2)).to.equal(ans);
  });
  it('returns the ans for a draw', function () {
    var arr1 = ['Portugal', 'Iceland'];
    var arr2 =[1, 1];
    var ans = 'At match Portugal - Iceland, the teams drew!';
    expect(euro2016(arr1,arr2)).to.equal(ans);
  });
});