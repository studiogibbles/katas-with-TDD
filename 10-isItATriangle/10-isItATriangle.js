var isItATriangle = function (a, b, c) {
  if(a + b > c){
    return true;
  } else {
    return false;
  }
};

module.exports = isItATriangle;