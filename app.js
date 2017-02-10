var fs = require('fs');

var readSource = './input.txt';

var inputArr = fs.readFileSync(readSource).toString().split("\n");
//takes the data from the txt file and puts it into an array
var k; 
var n;
var subArr = [];
//declaring the variables which we will populate from the txt string

//this function just takes the string and splits it up to asign K, N, and the Sell Prices
function parseTxt(arr) {
	paramArr = inputArr[0].split(' ')
	n = parseInt(paramArr[0]);
	k = parseInt(paramArr[1]);
	subArr = inputArr[1].split(' ').map(function(num) {
		return parseInt(num);
	})
}
parseTxt(inputArr);
//call it on the input file

//this function is what is checking the current series and comparing the vaules to determine if 
//it is increasing, decreasing, or neither. it returns a value that will be added to the count
//in Main.
function subRange(arr) {
	if(arr.length<=1){
		return 0
	}else{
		var increasing = true;
		var decreasing = true;
		for (var h=0; h<arr.length-1; h++){
			//if any number to the right of the previous number in the series is greater 
			// than or equal to that previous number, we can rule out that the series is increasing
			if(arr[h]>=arr[h+1]){
				increasing = false;
				//if any number to the right of the previous number in the series is less 
				// than or equal to that previous number, we can rule out that the series is decreasing
			}
			if(arr[h]<=arr[h+1]){
				decreasing = false;
				// after exiting the loop, now we can do a final check to see if series is increasing,
				 // decreasing, or neither using the increasing and decreasing boolean variables
			}
		}
		if(increasing){
			return 1
		}else if(decreasing){
			return -1
		}else{
			return 0
		}
	}
}


var partitions = n-k+1;
//setting a variable to the number of window partitions, or essentially the number of outputs
// we will have.

function main(partition) {
	for(var i=0; i<partition; i++){
		var subWindow = subArr.slice(i,i+k)
		var count = 0;
		    // for each partition window we need to compare sub-groupings of the partition,
		     // starting with pairs, then moving upwards to triplets, quadruplets, etc as needed
		for(var j=2; j<=k; j++){
			// for each sub-grouping, start with the leftmost series and call the function 
			// to check if its increasing, decreasing, or neither; move rightwards and check the 
			// next series in the sub-grouping as applicable until all series of that sub-grouping 
			// have been evaluated
			for(var g=0; g<=subWindow.length-j; g++){
				count += subRange(subWindow.slice(g,j+g))
			}
		}
		 // print the final running sum for the window partition
		console.log(count);
	}
}

main(partitions)








