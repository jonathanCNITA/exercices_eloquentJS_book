console.log("07_bean_counting.js here!");

//-------------------------------- START

// Basic version
// function countBs(someText) {
// 	let matchLetter = 'B';
// 	let manyMatch = 0;
// 	for(let i = 0; i < someText.length; i++) {
// 		if (someText[i] === matchLetter) {
// 			manyMatch++;
// 		}
// 	}
// 	return manyMatch;
// }

function countBs(someText) {
	return someText.split('').reduce((x, y) => x += (y === 'B' ? y : '')).length;
}

function countChar(someText, charToMatch) {
	return someText.split('').reduce((x, y) => 
		x += (y === charToMatch ? y : '')).length;	
}


//-- TESTS
console.log(countBs("BBC"));
// → 2

console.log(countChar("kakkerlak", "k"));
// → 4