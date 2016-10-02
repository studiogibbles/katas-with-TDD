var prizeDraw = function (arr) {
  //create a list of objects with the ranks
  //loop through array and ranks
  //for each item in the array get it's length, loop through the ranks
  //create new array of single characters using map

  var result = 0;
  var lengths = [];
  var splitArr = [];


  var ranks = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4,
    'e': 5,
    'f': 6,
    'g': 7,
    'h': 8,
    'i': 9,
    'j': 10,
    'k': 11,
    'l': 12,
    'm': 13,
    'n': 14,
    'o': 15,
    'p': 16,
    'q': 17,
    'r': 18,
    's': 18,
    't': 20,
    'u': 21,
    'v': 22,
    'w': 23,
    'x': 24,
    'y': 25,
    'z': 26
  };

  arr.forEach(function (value) {
    lengths.push(value.length);
    splitArr.push(value.split(""));
  });
  // console.log(splitArr);
    splitArr.forEach(function(name){
    name.forEach(function (letter) {
        for (var key in ranks){
          if (letter.toLowerCase() === key.toString()) {
            result += (ranks[key]);
        }
      }
    });
  });
  return result;
};


console.log(prizeDraw(['Anna']));




module.exports = prizeDraw;