
var stringUpper = function(string){
  var result = false;

  var regex = /[^A-Za-z]/;

  if(string.match(regex)){
    // TODO: use regex.test(string) - returns boolean
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

