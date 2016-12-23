
function prizeDraw (arr) {

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

function totalScore (arr) {
  var result = arr.map(function (name) {
    return letterScore(name);
  });
  return result;
}


function maxed (arr) {
  return Math.max.apply(null, arr)
}

function letterScore (name) {
  var score = 0;
  (name.split('')).forEach(function (letter) {
    score += ranks[letter];
  });
  return score + name.length;

}

  var finalResult = totalScore(arr);
  var indexed = maxed(finalResult);
  var position = finalResult.indexOf(indexed);
  return arr[position];
}



module.exports = prizeDraw;