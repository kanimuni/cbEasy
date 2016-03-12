// Using the JavaScript language, have the function FirstFactorial(num) take the num parameter 
// being passed and return the factorial of it (ie. if num = 4, return (4 * 3 * 2 * 1)). 
// For the test cases, the range will be between 1 and 18. 

// Input = 4  Output = 24
// Input = 8  Output = 40320

var firstFactorial = function(n) {
  if (n < 0)
    return -1;
	if (n === 0)
		return 1;
	else if (n === 1)
		return 1;
  else
	return n * firstFactorial(n-1);
};