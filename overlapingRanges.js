// Using the JavaScript language, have the function OverlappingRanges(arr) take 
// the array of numbers stored in arr which will contain 5 positive integers, 
// the first two representing a range of numbers (a to b), the next 2 also 
// representing another range of integers (c to d), and a final 5th element (x) 
// which will also be a positive integer, and return the string true if both 
// sets of ranges overlap by at least x numbers. For example: if arr 
// is [4, 10, 2, 6, 3] then your program should return the string true. 
// The first range of numbers are 4, 5, 6, 7, 8, 9, 10 and the second range 
// of numbers are 2, 3, 4, 5, 6. The last element in the array is 3, and there 
// are 3 numbers that overlap between both ranges: 4, 5, and 6. If both ranges do 
// not overlap by at least x numbers, then your program should return the string false. 

// Input = 5,11,1,5,1   Output = true
// Input = 1,8,2,4,4    Output = false

var createRange = function(a,b) {
  var newArray = [];
  for (var i=a; i<=b; i++) {
    newArray.push(i);
  }
  return newArray;
};

var overlappingRanges = function(array) {
  //debugger;
  var resultArray = [];
  var result;
  var a = createRange(array[0], array[1]);
  var b = createRange(array[2], array[3]);
  var aLength = a.length;
  var bLength = b.length;

  if(aLength < bLength) {
  	for (var i=0; i<aLength; i++) {
  		if (a[i] < b[0]) {
  			continue;
  		} else if (a[i] === b[0]) {
        resultArray.push(a[i]);
  		} else if(a[i]> b[0] && a[i] <= b[bLength-1]) {
  			resultArray.push(a[i]);
  		}
  	}
  } else {
  	for (var j=0; j<bLength; j++) {
  		if (b[j] < a[0]) {
  			continue;
  		} else if (b[j] === a[0]) {
        resultArray.push(b[j]);
  		} else if(b[j]> a[0] && b[j] <= a[aLength-1]) {
  			resultArray.push(b[j]);
  		}
  	}
  }

  if(resultArray.length >= array[4]) {
  	result = true;
  } else {
  	result = false;
  }
  console.log(result);
  return result;

};
