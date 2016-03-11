// Using the JavaScript language, have the function FirstReverse(str) take the str parameter 
// being passed and return the string in reversed order. 
// Input = "coderbyte"    Output = "etybredoc"
// Input = "I Love Code"  Output = "edoC evoL I"

var FirstReverse = function(string) {
	return string.split("").reverse().join("");
};