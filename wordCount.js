// Using the JavaScript language, have the function WordCount(str) take the str 
// string parameter being passed and return the number of words the string contains 
// (ie. "Never eat shredded wheat" would return 4). Words will be separated by single spaces. 

// Input = "Hello World"  Output = 2
// Input = "one 22 three" Output = 3

var wordCount = function(string) {
  return (string.split(" ").length);
};

console.log(wordCount("Hello World"));
console.log(wordCount("Hello World my name is kani"));