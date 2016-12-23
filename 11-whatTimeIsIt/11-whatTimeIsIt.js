var whatTimeIsIt = function (str) {

  var arr = str.split('');
  if (arr[8] === 'A' && arr[1] === '2') {
    return '00:00:00';
  }
  if (arr[8] === 'P' &&  arr[1] === '2') {
    return '24:00:00';
  }
  if (arr[8] === 'A') {
    return str.slice(0, -2);
  }
  if (arr[8] === 'P') {
      var slice = str.slice(0, -2);
      var hrs = +slice.substring(0,2) + 12;
      var newStr = slice.slice(2);
    return hrs + newStr;
  }

};

// console.log(whatTimeIsIt('12:00:00AM'));
// console.log(whatTimeIsIt('12:00:00PM'));
// console.log(whatTimeIsIt('09:25:11AM'));
// console.log(whatTimeIsIt('06:05:00PM'));

module.exports = whatTimeIsIt;