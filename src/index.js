module.exports = function check(str, bracketsConfig) {
	// your solution

	let fullStr = str + bracketsConfig.join().replace(/,/g, '');

	const brackets = {
		")": "(",
		"]": "[",
		"}": "{",

	};

	function isClosedBracket(item) {
		return [")", "]", "}"].indexOf(item) > -1;
	}


	const stack = [];


	for (let i = 0; i < fullStr.length; i++) {
		if (isClosedBracket(fullStr[i])) {
			if (brackets[fullStr[i]] === stack[stack.length - 1]) {
				stack.pop();
			} else {
				return false;
			}
		} else if (fullStr[i] === "|" || fullStr[i] === "0" || fullStr[i] === "1" || fullStr[i] === "2" ||
			fullStr[i] === "3" || fullStr[i] === "4" || fullStr[i] === "5" || fullStr[i] === "6" ||
			fullStr[i] === "7" || fullStr[i] === "8" || fullStr[i] === "9") {
			if (fullStr[i] === stack[stack.length - 1]) {
				stack.pop();
			} else {
				stack.push(fullStr[i]);
			}
		}
		else {
			stack.push(fullStr[i]);
		}
	}

	if (stack.length === 0) {
		return true;
	} else {
		return false
	}
}
