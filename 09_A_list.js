console.log("09_A_list.js here!");

//-------------------------------- START
function arrayToList(arr) {
	let obj = {};
	
	obj.value = arr.shift();
	if(arr.length === 0) {
		obj.rest = null;
	} else {
		obj.rest = arrayToList(arr);
	}
	return obj;
}


function listToArray(list) {
	let arr = [list.value];
	if(list.rest === null) {
		return arr;
	} else {
		return arr.concat(listToArray(list.rest));
	}
}


function prepend(x, y) {
	return {value: x, rest: y};
}


function nth(list, n) {
	if (!list) {
		return undefined;
	}
	if(n === 0) {
		return list.value;
	} else {
		return nth(list.rest,n-1);
	}
}


//-------------------------------- TESTS
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
console.log(nth(arrayToList([10, 20, 30, 40, 50]), 3));
// → 40
console.log(nth(arrayToList([]), 8));
// → undefined