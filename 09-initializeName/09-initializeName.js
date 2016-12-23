var intializeName = function (str) {

  var arr = str.split(' ');
  var first = arr.splice(0,1) + ' ';
  var last = ' ' + arr.pop();

  var mid = arr.map(function (element){
   return element[0].toUpperCase() +'.';
  }).join(' ');

  return first + mid + last;

};


module.exports = intializeName;