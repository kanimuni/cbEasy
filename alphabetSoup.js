// Using the JavaScript language, have the function AlphabetSoup(str) take the str 
// string parameter being passed and return the string with the letters in 
// alphabetical order (ie. hello becomes ehllo). Assume numbers and punctuation 
// symbols will not be included in the string. 

// Input = "coderbyte"    Output = "bcdeeorty"
// Input = "hooplah"      Output = "ahhloop"


var alphabetSoup = function(str) {
	return str.split("").sort().join("");
};

console.log(alphabetSoup("coderbyte"));
console.log(alphabetSoup("hooplah"));