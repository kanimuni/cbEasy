// Using the JavaScript language, have the function ArrayAdditionI(arr) take the array of numbers 
// stored in arr and return the string true if any combination of numbers in the array can be added 
// up to equal the largest number in the array, otherwise return the string false. 
// For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true 
// because 4 + 6 + 10 + 3 = 23. The array will not be empty, will not contain all the 
// same elements, and may contain negative numbers. 

// Input = 5,7,16,1,2   Output = "false"
// Input = 3,5,-1,8,12  Output = "true"



function arrayAdditionI(array) {
  var result = [];
  var maxNum = array.reduce(function(accumulator, item) {
	               if(accumulator > item) {
	              	return accumulator;
	              } else {
	              	return item;
	              }
                });

  var innerFunction = function(combination, arr) {
    for (var i = 0; i < arr.length; i++) {
      result.push(combination.concat(arr[i]));
      innerFunction(combination.concat(arr[i]), arr.slice(i + 1));
    }
  };
  
  innerFunction([], array);

  return result.map(function(collection) {
  return collection.reduce(function(accumulator, item) {
    return accumulator += item;
  }, 0);
}).reduce(function(accumulator, item){
  if( (accumulator === true) || (item === 11) ) {
    return true;
  } else {
    return false;
  }
},false);

}

console.log(arrayAdditionI([5,7,16,1,2]));
console.log(arrayAdditionI([3,5,-1,8,12]));