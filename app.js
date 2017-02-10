var fs = require('fs');

var readSource = './input.txt';

// console.log("Reading file synchronously");
// var fileData = fs.readFileSync(readSource, "utf8");
// console.log(fileData);

var inputArr = fs.readFileSync(readSource).toString().split("\n");
console.log(inputArr)

var k; 
var n;
var subArr = [];

function parseTxt(arr) {
	paramArr = inputArr[0].split(' ')
	n = parseInt(paramArr[0]);
	k = parseInt(paramArr[1]);
	subArr = inputArr[1].split(' ');
}
parseTxt(inputArr);
console.log(n);
console.log

