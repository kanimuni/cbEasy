// Using the JavaScript language, have the function LetterCountI(str) take the str 
// parameter being passed and return the first word with the greatest number of repeated letters. 
// For example: "Today, is the greatest day ever!" should return greatest because 
// it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. 
// If there are no words with repeating letters return -1. Words will be separated by spaces. 

var countLetterInWord = function(string) {
	//debugger;
	resultObj = {'count':0};
	for (var i=0; i<string.length; i++) {
		if (resultObj[string.charAt(i)] === undefined) {
			resultObj[string.charAt(i)] = 1;
		} else {
			++resultObj['count'];
		}
	}
	return resultObj['count'];
};

var highKey = function(object) {
	debugger;
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

var letterCountI = function(str) {
  var tempObj = {};
  var strArray = str.split(" ");

  each(strArray, function(value, key) {
    for (var i=0; i<value.length; i++) {
      tempObj[value] = countLetterInWord(value);
    }
  });

  return highKey(tempObj);
};