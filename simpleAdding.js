// Using the JavaScript language, have the function SimpleAdding(num) add 
// up all the numbers from 1 to num. For the test cases, the parameter 
// num will be any number from 1 to 1000. 

// Input = 12     Output = 78
// Input = 140    Output = 9870

//iterating via for loop
var simpleAdding = function(num) {
  var result = 0;
	for (var i=1; i <=num; i++) {
		result += i;
	}
	return result;
};

console.log(simpleAdding(140));


//using recursion
var simpleAdding2 = function(num) {
  if(num === 1) {
    return 1;
  }

  return num + simpleAdding2(num - 1);
};

console.log(simpleAdding2(140));
