module.exports = function check(str, bracketsConfig) {
	// your solution

	let fullStr = str;

	const brackets = {
		")": "(",
		"]": "[",
		"}": "{",
		"2": "1",
		"4": "3",
		"6": "5"
	};

	function isClosedBracket(item) {
		return [")", "]", "}", "2", "4", "6"].indexOf(item) > -1;
	}


	const stack = [];


	for (let i = 0; i < fullStr.length; i++) {
		if (isClosedBracket(fullStr[i])) {
			if (brackets[fullStr[i]] === stack[stack.length - 1]) {
				stack.pop();
			} else {
				return false;
			}
		} else if (fullStr[i] === "|" || fullStr[i] === "7" || fullStr[i] === "8") {
			if (fullStr[i] === stack[stack.length - 1]) {
				stack.pop();
				console.log(stack)
			} else {
				stack.push(fullStr[i]);
				console.log(stack)
			}
		}
		else {
			stack.push(fullStr[i]);
			console.log(stack)
		}
	}

	if (stack.length === 0) {
		return true;
	} else {
		return false
	}
}
