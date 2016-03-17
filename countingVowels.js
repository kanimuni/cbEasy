// Using the JavaScript language, have the function VowelCount(str) take 
// the str string parameter being passed and return the number of vowels 
// the string contains (ie. "All cows eat grass" would return 5). 
// Do not count y as a vowel for this challenge. 

// Input = "hello"     Output = 2
// Input = "coderbyte" Output = 3

var countingVowels = function(str) {
	var lookupObj = {
		a:true,
		e:true,
		i:true,
		o:true,
		u:true
	};
  var vowelCount = 0;
  for (var i=0; i<str.length; i++) {
    if(lookupObj[str[i]]) {
    vowelCount++;
    }
  }
  return vowelCount;
};

console.log(countingVowels("coderbyte"));

var countingVowels2 = function(str) {
  var count = 0;
  if(str.length === 0) {
  	return count;
  }

  return if(str[0])

};

