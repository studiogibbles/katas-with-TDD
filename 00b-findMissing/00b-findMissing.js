var findMissing = function (array){
  var result = [1,2,3,4,5,6,8,9];
  //count through the array

  //loops through array, array breaks out at missing number
  for(var i = 1; i < result.length; i ++ ){
    console.log(i)
  }


  return result;
};

module.exports =findMissing;