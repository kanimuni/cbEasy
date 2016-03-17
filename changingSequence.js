// Using the JavaScript language, have the function ChangingSequence(arr) take 
// the array of numbers stored in arr and return the index at which the numbers 
// stop increasing and begin decreasing or stop decreasing and begin increasing. 
// For example: if arr is [1, 2, 4, 6, 4, 3, 1] then your program should 
// return 3 because 6 is the last point in the array where the numbers were 
// increasing and the next number begins a decreasing sequence. 
// The array will contain at least 3 numbers and it may contains only a single 
// sequence, increasing or decreasing. If there is only a single sequence in the array, 
// then your program should return -1. Indexing should begin with 0. 

// Input = -4, -2, 9, 10       Output = -1
// Input = 5, 4, 3, 2, 10, 11  Output = 3

var changingSequence = function(array) {
	var result;
	//debugger;
	for (var i=0; i<array.length-1; i++) {
		if ( (array[1] - array[0]) > 0 ) {
      if( (array[i+1] - array[i]) > 0 ) {
        result = -1;
      } else {
        result = i;
        break;
      }
		} else {
      if( (array[i+1] - array[i]) < 0 ) {
        result = -1;
      } else {
        result = i;
        break;
      }
		}
	}
	console.log(result);
	return result;
};