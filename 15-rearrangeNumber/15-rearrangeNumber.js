var rearrangeNumber = function (num) {

  var arr = ('' + num).split('');

  if((arr.length < 3) ||(!Number.isInteger(num))) {return null};

    arr.sort(function (a, b) {
      return b - a;
    });
    var int = arr.join("");
    return parseInt(int);
};



module.exports=rearrangeNumber;