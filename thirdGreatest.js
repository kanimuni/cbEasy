// Using the JavaScript language, have the function ThirdGreatest(strArr) 
// take the array of strings stored in strArr and return the third largest 
// word within in. So for example: if strArr is ["hello", "world", "before", "all"] 
// your output should be world because "before" is 6 letters long, and "hello" 
// and "world" are both 5, but the output should be world because it appeared 
// as the last 5 letter word in the array. If strArr was ["hello", "world", "after", "all"] 
// the output should be after because the first three words are all 5 letters long, 
// so return the last one. The array will have at least three strings and each string 
// will only contain letters. 

// Input = "coder","byte","code"     Output = "code"
// Input = "abc","defg","z","hijk"   Output = "abc"


var thirGreatest = function(array) {
	return array.reduce(function(accumulator, value, key) {
		if(value.length > accumulator.length) {
			return value;
		} else {
			return accumulator;
		}
	}, "");
};

console.log ( thirGreatest(["coder","byte","code"]) );