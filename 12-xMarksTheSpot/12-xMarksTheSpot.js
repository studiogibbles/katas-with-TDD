var xMarks = function (arr) {
//set a new array
//find the array where there is an x
// find the index where there is an x


  var result = [];

  arr.forEach(function (el, i) {
    var array = el;
    array.forEach(function (el, j) {
      if (el === 'x') {
        result.push(i);
        result.push(j);
      }
    });
  });

  return result;


};



module.exports = xMarks;
