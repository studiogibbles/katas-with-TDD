var secondLargestNumber = function (arr) {

  var result = arr.filter(function(n) {
    // returns not, not a number, converts string to floating point
    // and converts floating point to 0dp(non-floating)
    return !isNaN(parseFloat(n)) && isFinite(n) })
    .sort(function (a, b) {
      return b - a
    }).slice(1, 2).pop();
  return result;

};


module.exports = secondLargestNumber;
