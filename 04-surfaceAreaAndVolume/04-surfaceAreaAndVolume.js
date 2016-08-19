var surfaceArea = function (data){

  //surface area
  var s1 = data.height * data.width * 2;
  var s2 = data.height * data.depth * 2;
  var s3 = data.width * data.depth * 2;

  var total = s1 + s2 + s3;

  //volume
  var volume  = data.height * data.width * data.depth ;
  return {
    surfaceArea: total,
    volume: volume
  }
};

module.exports = surfaceArea;