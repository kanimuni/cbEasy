// Using the JavaScript language, have the function CountingMinutesI(str) take 
// the str parameter being passed which will be two times (each properly formatted 
// with a colon and am or pm) separated by a hyphen and return the total number 
// of minutes between the two times. The time will be in a 12 hour clock format. 
// For example: if str is 9:00am-10:00am then the output should be 60. If str 
// is 1:00pm-11:00am the output should be 1320. 

// Input = "12:30pm-12:00am" Output = 690
// Input = "1:23am-1:08am"   Output = 1425


var CountingMinutesI = function(string) {
	var stringSplit = string.split("-");
	
	var startString = stringSplit[0];
  var endString = stringSplit[1];

	var startArr = startString.split(":").map(function(x) { return parseInt(x, 10) });
	var endArr = endString.split(":").map(function(x) { return parseInt(x, 10) });

  startArr.push(startString.substring(startString.length-2));
  endArr.push(endString.substring(endString.length-2));

  if(startArr[2] === 'am') {
    if(endArr[2] === 'am') {
      if(startArr[0] === endArr[0]) {
        return endArr[1];
      } else if (endArr[0]-startArr[0] > 0) {
        return ( ((endArr[0]-startArr[0])*60) + (endArr[1]-startArr[1]) );
      } else if(endArr[0]-startArr[0] < 0) {
        return ( ((endArr[0]-startArr[0]+12)*60) + (endArr[1]-startArr[1]) );
      }
    } else {
      if(endArr[0] === startArr[0]) {
        return ( (12*60) + endArr[1]);
      } else if(endArr[0]-startArr[0] >0) {
        return ( ((endArr[0]-startArr[0]+12)*60) + (endArr[1]-startArr[1]) );
      } else if(endArr[0]-startArr[0] <0) {
        return ( ((endArr[0]-startArr[0]+24)*60) + (endArr[1]-startArr[1]) );
      }
    }
  } else {
    if(endArr[2] === 'pm') {
      if(startArr[0] === endArr[0]) {
        return endArr[1];
      } else if (endArr[0]-startArr[0] > 0) {
        return ( ((endArr[0]-startArr[0])*60) + (endArr[1]-startArr[1]) );
      } else if(endArr[0]-startArr[0] < 0) {
        return ( ((endArr[0]-startArr[0]+12)*60) + (endArr[1]-startArr[1]) );
      }
    } else {                 //pm = am
      if(endArr[0] === startArr[0]) {
        return ( (12*60) + endArr[1]);
      } else if(endArr[0]-startArr[0] >0) {
        return ( ((endArr[0]-startArr[0]+12)*60) + (endArr[1]-startArr[1]) );
      } else if(endArr[0]-startArr[0] <0) {
        return ( ((endArr[0]-startArr[0]+24)*60) + (endArr[1]-startArr[1]) );
      }
    }
  }
};


console.log(CountingMinutesI("12:30pm-12:00am"));

console.log(CountingMinutesI("1:23am-1:08am"));


// if am - pm
// if e === s 2:00am 2:30pm  (+12)
// if e - s (+) 2:00am 3:30pm +1 (+12)
// else if e - s 2am 1pm  (-) (+24)

// if pm - am 
// if e === s 2:00pm 2:30am  (+12)
// if e - s (+) 2:00pm 3:30am +1 (+12)
// else if e - s 2pm 1am  (-) (+24)

// if am - am
//  if e === s 12am - 12:30am (+) (diff)
//  if e - s 1am 11:30am (+) just (diff)
//  else if e -s 12am 11am (-) then (+12)

// if pm - pm
//  if e === s 12pm - 12:30pm (+) (diff)
//  if e - s 11pm 11:30pm (+) just (diff)
//  else if e -s 12pm 11pm (-) then (+12) 


