console.log("08_Reversing_an_array.js here!");

//-------------------------------- START
function reverseArray(arr) {
	let newArr = [];
	for(let i = arr.length-1; i >= 0; i--) {
		newArr.push(arr[i]);
	}
	return newArr;
}

function reverseArrayInPlace(arr) {
	let halfArrLen = Math.floor(arr.length / 2);
	for(let i = 0; i < halfArrLen; i ++) {
		[ arr[i], arr[arr.length - (i + 1)] ] = [ arr[arr.length - (i + 1)], arr[i] ];
	}
	return arr;
}


//-------------------------------- TESTS
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
var arrayValue = [1, 2, 3, 4, 5, 6, 7, 8];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [8, 7, 6, 5, 4, 3, 2, 1]