// Using the JavaScript language, have the function DashInsert(str) insert dashes ('-') 
// between each two odd numbers in str. For example: if str is 454793 the output should 
// be 4547-9-3. Don't count zero as an odd number. 
// Input = 99946   Output = 9-9-946
// Input = 56730   Output = 567-30

var dashInsert = function(str) {
  var tempstr = "";
  for (var i=0; i<str.length; i++) {
    if( (str.charAt(i)).match(/[1,3,5,7,9]/i) && (str.charAt(i+1)).match(/[1,3,5,7,9]/i) ) {
      tempstr = tempstr + str.charAt(i);
      tempstr = tempstr + "-";
    } else {
      tempstr = tempstr + str.charAt(i);
    }
  }
  return tempstr;
};