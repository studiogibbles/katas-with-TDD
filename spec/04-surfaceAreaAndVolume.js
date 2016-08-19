
import { expect } from 'chai';
import surfaceArea from '../04-surfaceAreaAndVolume/04-surfaceAreaAndVolume';

describe.only('surfaceArea()', function () {
  it('should be a function', function () {
    expect(surfaceArea).to.be.a('function');
  });
  it('takes one arguments', function (){
    expect(surfaceArea.length).to.equal(1)
  });
  it('should return an object', function () {
    var test = {};
    expect(surfaceArea(test)).to.be.instanceOf(Object)
  });
  // it('expects the arguments to be a object', function () {
  //   expect(surfaceArea({})).to.be.a(Object)
  // });
  it('should return {surfaceArea: 1000, volume: 2000}' ,function () {
    var test = {
      height: 20,
      width: 10,
      depth: 10
    };
    expect(surfaceArea(test)).to.eql({surfaceArea: 1000, volume: 2000})
  });
  it('should return {surfaceArea: 1000, volume: 2000}' ,function () {
    var test = {
      height: 50,
      width: 50,
      depth: 30
    };
    expect(surfaceArea(test)).to.eql({surfaceArea: 11000, volume: 75000})
  });


});