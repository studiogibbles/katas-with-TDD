var isItATriangle = function (a, b, c) {
  if(a + b > c){
    return true;
  } else {
    return false;
  }
};


console.log(isItATriangle(3,  3, 3));
console.log(isItATriangle(4, 3, 10));
console.log(isItATriangle(2, 8, 10));
console.log(isItATriangle(2, 8, 5));


module.exports = isItATriangle;