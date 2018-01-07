console.log("10_Deep_comparison.js here!");

//-------------------------------- START
function deepEqual(v1, v2) {
	let areEqual = true;
	for(k in v1) {
		if(typeof(v1[k]) === "object" && typeof(v2[k]) === "object" ) {
			return deepEqual(v1[k], v2[k]);
		} else if(v1[k] != v2[k]) {
			areEqual = false;
		}
	}
	return areEqual;
}



//-------------------------------- TESTS
var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
console.log(deepEqual(obj, {flute: {is: "an"}, object: 2}));
// → false
console.log(deepEqual(obj, {flute: {is: "an", egg: 3
}, object: 2}));
// → false