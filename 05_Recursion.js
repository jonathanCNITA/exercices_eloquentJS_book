console.log("05_Recursion.js here!");

//-------------------------------- START
function isEven(num) {
	if (num == 0) {
		return true;
	} else if (num == 1) {
		return false;
	} else if (num < 0) {
		return isEven(-num);
	} else {
		return isEven(num - 2);
	} 
}

console.log(isEven(2));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??
