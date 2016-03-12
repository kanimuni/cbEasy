// Using the JavaScript language, have the function LetterChanges(str) take the str parameter 
// being passed and modify it using the following algorithm. Replace every letter in the string 
// with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize 
// every vowel in this new string (a, e, i, o, u) and finally return this modified string.

// Input = "hello*3"    Output = "Ifmmp*3"
// Input = "fun times!" Output = "gvO Ujnft!"

var letterChanges = function(string) {
	var lookuparr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	var tempArray = [];
	var convertedArray = [];
  var result = "";
  var finalresult = "";
  //debugger;
  for (var i=0; i<string.length; i++) {
    if ( indexOf(lookuparr, string.charAt(i)) === -1) {
      tempArray.push(string.charAt(i));
    } else {
      tempArray.push( indexOf(lookuparr, string.charAt(i)) );
    }
  }
  
  each(tempArray, function(value, key) {
    if (typeof value === 'string') {
      convertedArray.push(value);
    } else if (value === 25) {
        convertedArray.push(0);
    } else {
        convertedArray.push(value+1);
    }
  });

  each(convertedArray, function(value, key) {
    if (typeof value === "string") {
      result = result + value;
    } else {
      result = result + lookuparr[value];
    }
  });

  console.log(result);

  for (var j=0; j<result.length; j++) {
    if ( result.charAt(j).match(/[aeiou]/i) ) {
      finalresult = finalresult + result.charAt(j).toUpperCase();
    } else {
      finalresult = finalresult + result.charAt(j);
    }
  }
  return finalresult;
};

