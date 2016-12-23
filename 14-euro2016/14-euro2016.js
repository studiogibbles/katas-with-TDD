var euro2016 = function (arr1, arr2) {


  var zeroWin = 'At match ' + arr1[0] + ' - '+ arr1[1] +', ' + arr1[0] + ' won!';
  var oneWin = 'At match ' + arr1[0] + ' - '+ arr1[1] +', ' + arr1[1] + ' won!';
  var draw = 'At match ' + arr1[0] + ' - '+ arr1[1] +', the teams drew!';

  if(arr2[0] > arr2[1]){
    return zeroWin;
  }
  if(arr2[0] < arr2[1]){
    return oneWin;
  }
  if(arr2[0] === arr2[1]){
    return draw;
  }
};

module.exports=euro2016;