let sanitizeInput = function(string) {
  if(typeof string !== "string"){
    return undefined;
  }
  let result = "";

  let arr = string.split(" ");


  // switch (expr) {
  //   case "<":
  //   console.log("&lt");
  //   break;
  //   case ">":
  //   console.log("&gt");
  //   break;
  //   case "\"":
  //   console.log("&quot");
  //   case "&":
  //   console.log("&amp");
  //   break;

    return result;
  };


  console.log(sanitizeInput(123));
  module.exports = sanitizeInput;
