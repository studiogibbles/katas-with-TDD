var twoToOne = function (str1, str2) {

  var arr1 = str1.split("");
  var arr2 = str2.split("");


  var newArr = arr1.concat(arr2);


  function unique(newArr) {
    return newArr.sort().filter(function (item, pos, arr) {
      return !pos || item !== arr[pos - 1];
    })
  }

  var join = unique(newArr).join('');

  return   join;


};



module.exports = twoToOne;