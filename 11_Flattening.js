console.log("11_Flattening.js here!");

//-------------------------------- START
function flattening(arr) {
	return arr.reduce(function(a, b) {
		return a.concat(b);
	});
}



//-------------------------------- TESTS
var arrays = [[1, 2, 3], [4, 5], [6]];
console.log(flattening(arrays));

console.log(arrays.reduce(function(flat, elem){
	return flat.concat(elem);
}, []));
// → [1, 2, 3, 4, 5, 6]


// test filter
console.log(flattening(arrays).filter(function(a){
	return a > 3;
}, []));
// → [4, 5, 6]