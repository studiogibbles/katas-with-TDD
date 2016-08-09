function monkeyCount(n) {
  // your code here


  var newArr = [];
  for(var i = 1; i < n + 1; i ++){
    newArr.push(i);


  }
  return newArr;
}

module.exports =monkeyCount;