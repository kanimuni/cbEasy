// Using the JavaScript language, have the function BitwiseOne(strArr) take the array of 
// strings stored in strArr, which will only contain two strings of equal length that 
// represent binary numbers, and return a final binary string that performed the bitwise 
// OR operation on both strings. A bitwise OR operation places a 0 in the new string 
// where there are zeroes in both binary strings, otherwise it places a 1 in that spot. 
// For example: if strArr is ["1001", "0100"] then your program should return the 
// string "1101" 

// Input = ["100", "000"]     Output = "100"
// Input = ["00011", "01010"] Output = "01011"


var bitWise = function(arr) {
  var strLength = arr[0].length;
  var result = "";
  //debugger;
  for (var i=0; i<strLength; i++) {
    if ( (arr[0].charAt(i) === "0") && (arr[1].charAt(i) === "0") ) {
      result = result + "0";
		} else {
			result = result + "1";
		}
	}
	return result;
};