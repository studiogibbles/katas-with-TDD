
var stringUpper = function(string){
  var result = false;

  var regex = /[^A-Za-z]/;

  if(regex.test(string)){
  return 'Invalid input';
  }
  if(string === string.toUpperCase()){
    return true;
    }else {
    return false;
  }

return result;
};

module.exports=stringUpper;

