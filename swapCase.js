// Using the JavaScript language, have the function SwapCase(str) take the str parameter 
// and swap the case of each character. For example: if str is "Hello World" the output 
// should be hELLO wORLD. Let numbers and symbols stay the way they are. 

// Input = "Hello-LOL"Output = "hELLO-lol"
// Input = "Sup DUDE!!?"Output = "sUP dude!!?"

var swapCase = function(str) {
  var newstring = "";
  for (var i=0; i<str.length; i++) {
    if( (str.charAt(i)).match(/[a-z]/i) ) {
    	if( str.charAt(i) === str.charAt(i).toUpperCase() ) {
    		newstring = newstring + str.charAt(i).toLowerCase();
    	} else {
    		newstring = newstring + str.charAt(i).toUpperCase();
    	}
    }
  }
  return newstring;
};


var isLetter = function(str) {
  return str.length === 1 && str.match(/[a-z]/i);
};