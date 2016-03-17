// Using the JavaScript language, have the function HammingDistance(strArr) 
// take the array of strings stored in strArr, which will only contain two 
// strings of equal length and return the Hamming distance between them. 
// The Hamming distance is the number of positions where the corresponding 
// characters are different. For example: if strArr is ["coder", "codec"] 
// then your program should return 1. The string will always be of equal 
// length and will only contain lowercase characters from the alphabet and numbers.

// Input = ["10011", "10100"]           Output = 3
// Input = ["helloworld", "worldhello"] Output = 8

var hammingDistance = function(strArr) {
  var strLength = (strArr[0].length);
  var hdcount = 0;
  //debugger;
  for (var i=0; i<strLength; i++) {
  	if ( !(strArr[0].charAt(i) === strArr[1].charAt(i)) ) {
  		++hdcount;
  	}
  }
  return hdcount;
};

// strArr[0][i] would have done the same thing