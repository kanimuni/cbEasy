/*
Using the JavaScript language, have the function ArithGeo(arr) take the array of numbers 
stored in arr and return the string "Arithmetic" if the sequence follows an arithmetic 
pattern or return "Geometric" if it follows a geometric pattern. If the sequence 
doesn't follow either pattern return -1. An arithmetic sequence is one where the 
difference between each of the numbers is consistent, where as in a geometric sequence, 
each term after the first is multiplied by some constant or common ratio. 
Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. 
Negative numbers may be entered as parameters, 0 will not be entered, 
and no array will contain all the same elements.
*/

var checkArith = function(array) {
  return reduce(array, function(accumulator, value, key) {
    if( (value - accumulator) === (array[1] - array[0]) ) {
      return value;
    } else {
      return false;
    }
  });
};

var checkGeo = function(array) {
  return reduce(array, function(accumulator, value, key) {
    if( (value/accumulator) === (array[1]/array[0]) ) {
      return value;
    } else {
      return false;
    }
  });
};

var ArithGeo = function(arr) {
  if (arr.length <=2) {
    console.log("Not enough numbers in sequence, need 3 or more values to analyze");
  }

  if (arr[1]-arr[0] === arr[2]-arr[1]) {
    if (checkArith(arr)) {
      return "sequence is Arithmetic";
    } else {
      return "sequence unknown";
    }
  } else if( (arr[1]/arr[0]) === (arr[2]/arr[1]) ) {
    if (checkGeo(arr)) {
      return "sequence is Geometric";
    } else {
      return "sequence is unknown";
    }
  } else {
    return "sequence is unknown";
  }
};
 