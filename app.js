var fs = require('fs');

var readSource = './input.txt';

var inputArr = fs.readFileSync(readSource).toString().split("\n");

var k; 
var n;
var subArr = [];

//this function just takes the text fromm the input file and asigns variables
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
// console.log('this is n', n);
// console.log('this is k', k)
// console.log('this is sub array', subArr);

function subRange(arr) {
	if(arr.length<=1){
		return 0
	}else{
		var increasing = true;
		var decreasing = true;
		for (var h=0; h<arr.length-1; h++){
			if(arr[h]>=arr[h+1]){
				increasing = false;
			}
			if(arr[h]<=arr[h+1]){
				decreasing = false;
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

function main(partition) {
	for(var i=0; i<partition; i++){
		var subWindow = subArr.slice(i,i+k)
		var count = 0;
		for(var j=2; j<=k; j++){
			for(var g=0; g<=subWindow.length-j; g++){
				count += subRange(subWindow.slice(g,j+g))
			}
		}
		console.log(count);
	}
}

main(partitions)








