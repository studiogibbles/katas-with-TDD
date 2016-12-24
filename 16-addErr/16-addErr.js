var addErr = function (str){

  var arr = str.split(" ");

  var result = arr.map(function (value) {
    if(value.match(/[^AEIOU]$/ig)){return value + 'err'};
    if(!value.match(/[^AEIOU]$/ig)){return value};
  });

  return result;


};

module.exports=addErr;
