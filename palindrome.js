/*
Using the JavaScript language, have the function Palindrome(str) take the str parameter
being passed and return the string true if the parameter is a palindrome, 
(the string is the same forward as it is backward) otherwise return the string false. 
For example: "racecar" is also "racecar" backwards. 
Punctuation and numbers will not be part of the string.
*/

// Input = "never odd or even"   Output = "true"
// Input = "eye"                 Output = "true"

var palindrome = function(string) {
	var str = string.replace(/\s+/g, '');
	var strLength = str.length;
	var strStartIndex = 0;
	if (strLength === 3) {
		if ( (str.charAt(0) === str.charAt(2)) ) {
			return true;
		} else {
			return false;
		}
	}
		
	if (strLength === 4) {
		if ( str.charAt(0) === str.charAt(3) && str.charAt(1) === str.charAt(2) ) {
			return true;
		} else {
			return false;
		}
	}

	if (str.charAt(0) !== str.slice(-1)) {
    return false;
  }

	return palindrome(str.slice(++strStartIndex, --strLength));

};

console.log( palindrome("anna") );
console.log( palindrome("ana") );
console.log( palindrome("racecar") );
console.log( palindrome("race car") );
console.log( palindrome("never odd or even") );