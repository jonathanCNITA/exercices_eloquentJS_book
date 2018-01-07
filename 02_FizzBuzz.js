console.log("02_FizzBuzz.js here!");

//-------------------------------- START

for(let i = 0; i <= 100; i++) {
	let toPrint = '';
	if (i%3 === 0) {
		toPrint += 'Fizz';
	}
	if (i%5 === 0) {
		toPrint += 'Buzz';
	}
	
	console.log(toPrint || i);
}


//-- Eloquent solution
// for (var n = 1; n <= 100; n++) {
//   var output = "";
//   if (n % 3 == 0)
//     output += "Fizz";
//   if (n % 5 == 0)
//     output += "Buzz";
//   console.log(output || n);
// }