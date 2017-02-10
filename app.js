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
console.log('this is n', n);
console.log('this is k', k)
console.log('this is sub array', subArr);

function findIncr(arr) {
	count = 0;
	for(i=0; i<arr.length-1; i++){
		var increasing = false
		for(j=i+1; j<arr.length; j++){
			if(!arr[j]>arr[j-1]){
				increasing=false
				break
			}
			if(increasing){
				count+=1;
			}
			if(arr[j]>arr[j-1]){
				count+=1;
				increasing=true
			}
		}
	}
	return count
}

function findDecr(arr) {
	count = 0;
	for(i=0; i<arr.length-1; i++){
		var decreasing = false
		for(j=i+1; j<arr.length; j++){
			if(decreasing){
				count+=1;
			}
			else if(arr[j]<arr[j-1]){
				count+=1;
				decreasing=true
			}else{
				decreasing=false
			}
		}
	}
	return count
}
console.log('please work: ',findIncr([188930,194123,201345,154243]))


function subRange(n,k,arr) {
	if(arr.length<k){
		return;
	};
	currSubRange = arr.slice(0,k)
	console.log(currSubRange)
	console.log(findIncr(currSubRange)-findDecr(currSubRange));
	arr.splice(0,1);
	subRange(n,k,arr);
}

// subRange(n, k, subArr);





