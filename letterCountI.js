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


     





var LetterCountI = function(str) {
  var lookupobj = {'a':1, 'b':1, 'c':1, 'd':1, 'e':1, 'f':1, 'g':1, 'h':1, 'i':1, 'j':1, 'k':1, 'l':1, 'm':1, 'n':1, 'o':1, 'p':1, 'q':1, 'r':1, 's':1, 't':1, 'u':1, 'v':1, 'w':1, 'x':1, 'y':1, 'z':1};
  var tempObj = {};
  
  var strArray = str.split(" ");
  var stringOfLettersArray = [];
  each(strArray, function(value, key) {
    stringOfLettersArray.push(value.split(""));
  });
  
  each(strArray, function(value, key) {
    tempObj[value] = 0;
  });

  each(strArray, function(value, key) {
    for (var i=0; i<value.length; i++) {
      if (lookupobj[value.charAt(i)]) {
        tempObj[value]++;
      }
    }
  });
  return tempObj;
};









  var tempObj = {};

  each(strArray, function(value) {
    if (tempObj)

  });

  //create an array of strings

  //count how many repeated letters for each word

  // store the word and count in an array

  // return the word with the most repeated letters
  // if more than two return first

  // if none return -1



};