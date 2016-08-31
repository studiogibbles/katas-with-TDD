var sumOfMultiples = function (num, predicate) {

  if (predicate === true) {
    var result = 0;

    for (var i = 0; i < num; i++) {

      if (i % 3 === 0 || i % 5 === 0) {
        console.log(i);
        result += i;
      }
    }
  }
  return result;

};

module.exports = sumOfMultiples;