var middleCharacter = function (str){

    var result = '';

    if (str.length <= 2){result = str};
    if (str.length > 2) {result = middleCharacter(str.slice(1,-1))};

    return result
  };

module.exports=middleCharacter;