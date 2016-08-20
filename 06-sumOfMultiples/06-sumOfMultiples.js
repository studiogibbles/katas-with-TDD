var sumOfMultiples = function (num, predicate){

  if(arguments[2] === true) {
    var result = 0;

    for (var i = 0; i < num; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        result += i;
      }
    }
    return result + true;
  } else{
    return false;
  }



};

module.exports = sumOfMultiples;