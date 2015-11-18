function convert(num) {
	var numArr = [];
	var romNum = [];
	sNum = num.toString();

	for (var i = 0; i < sNum.length; i++) {
		numArr.push(+sNum.charAt(i));
	};
	for (var i = numArr.length; i < 4; i++) {
		numArr.unshift("0");
	};
	if (numArr[0] > 0) {
		for (var i = 0; i < numArr[0]; i++) {
			romNum.push("M");
		}
	};
	if (numArr[1] > 0) {
		if (numArr[1] == 9) {
			romNum.push("CM");
		} else if (numArr[1] >= 5) {
			romNum.push("D");
			for (var i = numArr[1]; i > 5; i--) {
				romNum.push("C")
			};
		} else if (numArr[1] == 4) {
			romNum.push("CD");
		} else {
			for (var i = numArr[1] - 1; i >= 0; i--) {
				romNum.push("C");
			};
		};
	};
	if (numArr[2] > 0) {
		if (numArr[2] == 9) {
			romNum.push("XC");
		} else if (numArr[2] >= 5) {
			romNum.push("L");
			for (var i = numArr[2]; i > 5; i--) {
				romNum.push("X")
			};
		} else if (numArr[2] == 4) {
			romNum.push("XL");
		} else {
			for (var i = numArr[2] - 1; i >= 0; i--) {
				romNum.push("X");
			};
		};
	};
	if (numArr[3] > 0) {
		if (numArr[3] == 9) {
			romNum.push("IX");
		} else if (numArr[3] >= 5) {
			romNum.push("V");
			for (var i = numArr[3]; i > 5; i--) {
				romNum.push("I")
			};
		} else if (numArr[3] == 4) {
			romNum.push("IV");
		} else {
			for (var i = numArr[3] - 1; i >= 0; i--) {
				romNum.push("I");
			};
		};
	};
	return romNum.join('');
}

convert(36);