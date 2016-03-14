// Using the JavaScript language, have the function MeanMode(arr) take the array of 
// numbers stored in arr and return 1 if the mode equals the mean, 
// 0 if they don't equal each other (ie. [5, 3, 3, 3, 1] should return 1 
// because the mode (3) equals the mean (3)). The array will not be empty, 
// will only contain positive integers, and will not contain more than one mode. 

// Mean = Average (sum of numbers divided by numer of numbers)
// Mode = number with most occurence
// Input = 1, 2, 3         Output = 0
// Input = 4, 4, 4, 6, 2   Output = 1

// var reduce = function(collection, iterator, accumulator) {
//   if (arguments.length > 2) {
//     each(collection, function(value, key) {
//       accumulator = iterator(accumulator, value, key);
//     });
//   } else {
//     var accumulatorProvided = false;
//     each(collection, function(value, key) {
//       if (accumulatorProvided === false) {
//         accumulator = value;
//         accumulatorProvided = true;
//       } else {
//         accumulator = iterator(accumulator, value, key);
//       }
//     });
//   }
//   return accumulator;
// };

var sumOfRange = function(array) {
	return reduce(array, function(accumulator, item) {
      return accumulator+item;
	}, 0);
};

var createFrequencyObj = function(array) {
	var tempobj = {};
  each(array, function(value, key) {
	  if(tempobj[value]) {
		  tempobj[value]++;
	  } else {
		  tempobj[value] = 1;
	  }
  });
	return tempobj;
};

var doesRepeat = function(array) {
	var tempobj = {};
	var result = false;
	debugger;
  each(array, function(value, key) {
	  if (tempobj[value]) {
		  tempobj[value]++;
		  if (tempobj[value] >= 2) {
		  	result = true;
		  }	
	  } else {
		    tempobj[value] = 1;
		}
  });
	return result;
};


var pickMode = function(tempobj) {
  var resultval;
  var resultkey;
    each(tempobj, function(value, key) {
	    debugger;
	    if (!resultval) {
		    resultval = value;
		    resultkey = key;
	    } else if (resultval < value) {
        resultval = value;
		    resultkey = key;
	    }
    });
  return Number(resultkey);
};






var meanMode = function(arr) {
  var mean = sumOfRange(arr) / arr.length;
  var mode = pickMode(createFrequencyObj(arr));
  var repeats = doesRepeat(arr);
  debugger;
  if (repeats) {
    if (mean === mode) {
  	  return 1;
    } else {
  	  return 0;
    }
  } else {
  	return 0;
  }
};