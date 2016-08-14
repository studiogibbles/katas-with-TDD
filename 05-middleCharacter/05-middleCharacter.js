var middleCharacter = function (str){

  if(str <= 2){return str}

  if(str > 2){return middleCharacter(str.slice(1,-1))};
  };


module.exports=middleCharacter;