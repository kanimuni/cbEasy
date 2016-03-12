// Using the JavaScript language, have the function DivisionStringified(num1,num2) take 
// both parameters being passed, divide num1 by num2, and return the result as a string 
// with properly formatted commas. If an answer is only 3 digits long, return the number 
// with no commas (ie. 2 / 3 should output "1"). For example: if num1 is 123456789 and 
// num2 is 10000 the output should be "12,346". 

// Input = 5 & 2      Output = "3"
// Input = 6874 & 67  Output = "103"

var divisionStringfield = function(num1, num2) {
  result = "";
  //debugger;
  var divNumString = ""+( Math.ceil(num1/num2) );
  if (divNumString.length <= 3) {
	  result = divNumString;
  } else {
  	for (var i=0, j=divNumString.length; i< divNumString.length, j>0; i++, j--) {
  		if( !(j%3 === 1) ) {
  			result = result + divNumString.charAt(i);
  		} else {
  			if (!(j===1)) {
  			  result = result + divNumString.charAt(i);
  			  result = result + ",";
  			} else {
          result = result + divNumString.charAt(i);
  			}
  		}
  	}
  }
  return result;
};