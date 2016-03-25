// Using the JavaScript language, have the function MultiplicativePersistence(num) take the num parameter being passed 
// which will always be a positive integer and return its multiplicative persistence which is the number of times you 
// must multiply the digits in num until you reach a single digit. For example: if num is 39 then your program should 
// return 3 because 3 * 9 = 27 then 2 * 7 = 14 and finally 1 * 4 = 4 and you stop at 4. 

// Input = 4   Output = 0
// Input = 25  Output = 2


var multiplicativePersistence = function(number, count) {
  count = count||0;
  var newnum = 1;
  var numString = number.toString();
  var numLength = numString.length;
  
  for(var i=0; i<numLength; i++) {
    newnum *= Number(numString[i]);
  }

  //if number is greater than 9 
  if(number > 9) {
    //yes: count one
    count++;
    // and recurse
    return multiplicativePersistence(newnum, count);
  } else {
    //no: return a result of zero
    return count;
  }
};

console.log(multiplicativePersistence(25));