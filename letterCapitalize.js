// Using the JavaScript language, have the function LetterCapitalize(str) take 
// the str parameter being passed and capitalize the first letter of each word. 
// Words will be separated by only one space. 

// Input = "hello world"  Output = "Hello World"
// Input = "i ran there"  Output = "I Ran There"

var letterCapitalize = function(str) {
  var resultString = "";
  var strLength = str.length;
  resultString += str[0].toUpperCase();
  for (var i=1; i<strLength; i++) {
    if(str[i-1].charCodeAt() === 32) {
      resultString += str[i].toUpperCase();
    } else {
      resultString += str[i];
    }
  }
  return resultString;
};
