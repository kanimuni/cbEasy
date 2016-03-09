/*
Using the JavaScript language, have the function ABCheck(str) 
take the str parameter being passed and return the string true 
if the characters a and b are separated by exactly 3 places 
anywhere in the string at least once 
(ie. "lane borrowed" would result in true because there is exactly three characters between a and b). 
Otherwise return the string false.
*/

// Input = "after badly" Output = "false"
// Input = "Laura sobs"  Output = "true"

var ABCheck = function(string) {
  var strLength = string.length;
  for (var i=0; i < strLength; i++) {
    if ( (string.charAt(i) === "a") && (string.charAt(i+4) === "b") ) {
    return true;
    }
  }
};