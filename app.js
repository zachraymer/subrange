var fs = require('fs');

var readSource = './input.txt';

var inputArr = fs.readFileSync(readSource).toString().split("\n");
console.log(inputArr)

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

function subRange(n,k,arr) {
	if(arr.length<k){
		return;
	};
	var incr = 0;
	var decr = 0;
	for(i=0; i<=k-1; i++){
		if(arr[i]<arr[i+1]){
			if(incr===0){
				incr+=2
			}else{
				incr+=1
			}
		}
		if(arr[i]<arr[i-1]){
			if(decr===0){
				decr+=2
			}else{
				decr+=1
			}
		}
	}
	console.log(incr-decr);
	arr.splice(0,1);
	console.log(arr);
	subRange(n,k,arr);
}

subRange(n, k, subArr);





