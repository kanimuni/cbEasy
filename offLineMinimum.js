
// Using the JavaScript language, have the function OffLineMinimum(strArr) take 
// the strArr parameter being passed which will be an array of integers ranging 
// from 1...n and the letter "E" and return the correct subset based on the following rules. 
// The input will be in the following format: ["I","I","E","I",...,"E",...,"I"] where 
// the I's stand for integers and the E means take out the smallest integer currently 
// in the whole set. When finished, your program should return that new set with 
// integers separated by commas. For example: if strArr is ["5","4","6","E","1","7","E","E","3","2"] 
// then your program should return 4,1,5. 

// Input = "1","2","E","E","3"              Output = "1,2"
// Input = "4","E","1","E","2","E","3","E"  Output = "4,1,2,3"

var returnMinimum = function(array) {
	var minimum = array[0];
	for (var i=1; i<array.length; i++) {
    if (minimum < array[i]) {
      minimum = minimum;
    } else {
      minimum = array[i];
    }
	}
  console.log(minimum);
	return minimum;
};

var offLineMinimum = function(array) {
  var resultArray = [];
 
  var innerfunction = function(arr) {
    
    if( contains(arr, "E")  === false ) {
      return resultArray;
    }

  	for (var i=0; i<arr.length; i++) {
  		if(arr[i] === 'E') {
  			for(var j=0; j=i-1; j++) {
  				var temparr = [];
  				temparr.push(j);
  			} 
  			var newarr = arr.splice(i, 1);
  			var minimumkey = temparr.indexOf(returnMinimum(temparr));
  			resultArray.push(returnMinimum(temparr));
  			var newnewarr = newarr.splice(minimumkey, 1);
  			return offLineMinimum(newnewarr);
  		}
  	}
  };

  innerfunction(array);
  return resultArray;
};
