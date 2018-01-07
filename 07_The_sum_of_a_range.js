console.log("07_The_sum_of_a_range.js here!");

//-------------------------------- START
function range(start, end, step=1) {
	let r = [];
	if(step === 0) {
		step = 1;
	}
	
	if (step > 0) {
		for(let i = start; i <= end; i += step) {
			r.push(i);
		}
	} else {
		for(let i = start; i >= end; i += step) {
			r.push(i);
		}
	}
	
	return r;
}


function sum(arr) {
	return arr.reduce((t, v) => t + v);
}


//-------------------------------- TESTS
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55