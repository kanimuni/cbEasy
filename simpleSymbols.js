// Using the JavaScript language, have the function SimpleSymbols(str) 
// take the str parameter being passed and determine if it is an 
// acceptable sequence by either returning the string true or false. 
// The str parameter will be composed of + and = symbols with several 
// letters between them (ie. ++d+===+c++==a) and for the string to be 
// true each letter must be surrounded by a + symbol. So the string to 
// the left would be false. The string will not be empty and will have 
// at least one letter. 

// Input = "+d+=3=+s+"    Output = "true"
// Input = "f++d+"        Output = "false"



var checkSymbolBalance = function(str) {
  var result = true;
	for(var i=0; i<str.length; i++) {
    if(str[i].match(/[a-z]/i)) {
      if( result && ( (str[i-1] === "+") && (str[i+1] === "+") ) ){
        result = true;
      } else {
        result = false;
      }
    }
  }
  return result;
};


console.log(checkSymbolBalance("+d+=3=+s+"));
console.log(checkSymbolBalance("f++d+"));