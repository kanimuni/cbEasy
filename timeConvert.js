// Using the JavaScript language, have the function TimeConvert(num) take the num parameter 
// being passed and return the number of hours and minutes the parameter converts 
// to (ie. if num = 63 then the output should be 1:3). Separate the number of hours and minutes with a colon. 

// Input = 126   Output = "2:6"
// Input = 45    Output = "0:45"

var timeConvert = function(num) {
  if(num < 60) {
    return "0:"+num;
  } else {
    return Math.floor(num/60) + ":" + num%60;
  }
};

console.log( timeConvert(59) );
console.log( timeConvert(61) );