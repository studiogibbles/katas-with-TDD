var surfaceArea = function (height, width, depth){

  var  result = {};


  var obj = {};

  var height  = obj.height;

  var width = obj.width;

  var depth = obj.depth;

  //surface area
  var s1 = height * width * 2;
  var s2 = height * depth * 2;
  var s3 = width * depth * 2;

  var total = s1 + s2 + s3;
  console.log(total);

  //volume
  var volume  = height * width * depth ;
  console.log(volume);

  var finalObj = {};



  return result

};

module.exports = surfaceArea;