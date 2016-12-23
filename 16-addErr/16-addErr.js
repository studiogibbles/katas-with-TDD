var addErr = function (str){

  //convert str to arr, search for every consonant, if consonant found add 'err'

  var arr = str.split(" ");
  console.log(arr);

  var result = arr.map(function (value) {
    if(value.match(/[^AEIOU]$/ig)){return value + 'err'};
    if(!value.match(/[^AEIOU]$/ig)){return value};
  });

  return result;


};

console.log(addErr('Hello, I am Bob.'));

module.exports=addErr;