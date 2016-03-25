// Using the JavaScript language, have the function AdditivePersistence(num) take the num parameter being passed which 
// will always be a positive integer and return its additive persistence which is the number of times you must add the 
// digits in num until you reach a single digit. For example: if num is 2718 then your program should return 2 
// because 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and you stop at 9. 

// Input = 4   Output = 0
// Input = 19  Output = 2



var additivePersistence = function(number, count) {
  count = count||0;
  var newnum = 0;
  var numString = number.toString();
  var numLength = numString.length;
  
  for(var i=0; i<numLength; i++) {
    newnum += Number(numString[i]);
  }

  //if number is greater than 9 
  if(number > 9) {
    //yes: count one
    count++;
    // and recurse
    return additivePersistence(newnum, count);
  } else {
    //no: return a result of zero
    return count;
  }
};

console.log(additivePersistence(4));
console.log(additivePersistence(19));