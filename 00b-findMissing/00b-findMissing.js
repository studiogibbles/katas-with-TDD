var findMissing = function (arr){
  var result = 0;
  for(var i = 0; i < arr.length -1; i ++ ){
    if(i === 0 && arr[i] && arr[i] !== 1) {
      return 1
    }
   var firstItem = arr[i];
    var secondItem = arr[i + 1];

    if(secondItem - firstItem !== 1){
      result = firstItem + 1;
    }
  }

  return result;
};

//Look at each item in the array
//Look at the one after i
//Is there a difference of 1?
//If so, good
//If not the difference is not one
  // ...return missing number (prev number +1)

module.exports =findMissing;