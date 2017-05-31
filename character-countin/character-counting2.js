var arg = process.argv[2];
 
function countLetters (str) {
	var str = str.split("");
	var lettersObj = {};

	for (var char = 0; char < str.length; char++) {
		var currentAmount = lettersObj[str[char]];

		if (currentAmount == undefined) {
		  currentAmount = [char];
		} else {
		currentAmount.push(char);
		}

		lettersObj[str[char]] = currentAmount;
	}
		
return lettersObj;
}

console.log(countLetters(arg));








