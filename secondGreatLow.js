// Using the JavaScript language, have the function SecondGreatLow(arr) take the array of 
// numbers stored in arr and return the second lowest and second greatest numbers, 
// respectively, separated by a space. For example: if arr contains [7, 7, 12, 98, 106] 
// the output should be 12 98. The array will not be empty and will contain at least 2 numbers. 
// It can get tricky if there's just two numbers! 
// Input = 1, 42, 42, 180  Output = "42 42"
// Input = 4, 90           Output = "90 4"

var secondGreatLow = function(arr) {
	var uniqArray = uniq(arr);
	var uniqSortArray = uniqArray.sort(function(a,b){return a - b;});
	var resultArray = [];
	if (uniqSortArray.length >= 3) {
    resultArray.push(uniqSortArray[uniqSortArray.length-2]);
    resultArray.push(uniqSortArray[1]);
	} else {
		resultArray.push(uniqSortArray[1]);
    resultArray.push(uniqSortArray[0]);
	}
	return resultArray;
};