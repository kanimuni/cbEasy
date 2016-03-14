// Using the JavaScript language, have the function NumberSearch(str) take the str parameter, 
// search for all the numbers in the string, add them together, then return that final number. 
// For example: if str is "88Hello 3World!" the output should be 91. You will have to 
// differentiate between single digit numbers and multiple digit numbers like in the example above. 
// So "55Hello" and "5Hello 5" should return two different answers. Each string will contain 
// at least one letter or symbol. 

// Input = "75Number9"         Output = 84
// Input = "10 2One Number*1*" Output = 13

var numberAddition = function(str) {
	var tempArr = [];
	var result = 0;
	var tempstr ="";
	var total = 0;
	for (var i=0; i<str.length; i++) {
    if( (str.charAt(i)).match(/[0-9]/i) && (str.charAt(i+1)).match(/[0-9]/i) ) {
      tempstr = tempstr + str.charAt(i);
    } else if ( (str.charAt(i)).match(/[0-9]/i) && (i+1 === str.length) ) {
      tempstr = tempstr + str.charAt(i);
      tempArr.push( Number(tempstr) );
      tempstr = "";
    } else if ( (str.charAt(i)).match(/[0-9]/i) && !(str.charAt(i+1)).match(/[0-9]/i) ) {
      tempstr = tempstr + str.charAt(i);
      tempArr.push( Number(tempstr) );
      tempstr = "";
    } else {
      continue;
    }
  }
	total = reduce(tempArr, function(accumulator, item) {
    return accumulator+item;
	}, 0);
  return total;
};



