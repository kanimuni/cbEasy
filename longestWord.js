// Using the JavaScript language, have the function LongestWord(sen) take the sen parameter 
// being passed and return the largest word in the string. If there are two or more words 
// that are the same length, return the first word from the string with that length. 
// Ignore punctuation and assume sen will not be empty.

// Input = "fun&!! time"  Output = "time"
// Input = "I love dogs"  Output = "love"

var highKey = function(object) {
	var countBiggest = {};
	each(object, function(value, key) {
		if (countBiggest['keepcount'] === undefined) {
			countBiggest['keepcount'] = value;
		}

		if (value > countBiggest['keepcount']) {
      countBiggest['keepcount'] = value;
      countBiggest['result'] = key;
		}
	});
	return countBiggest['result'];
};

var longestWord = function(string) {
	var str = string.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
	stringArray = str.split(" ");
	var tempObj = {};
	each(stringArray, function(value, key) {
		tempObj[value] = value.length;
	});
	
  return highKey(tempObj);
};