function replace(str, before, after) {
	str.split(' ').map(function(curr) {
		if (curr == before) {
			curr.split('').map(function(currChar) {
				if (currChar == currChar.toUpperCase()) {
					after = after.charAt(0).toUpperCase() + after.substr(1);
				}
			}).join('');
		}
	}).join(' ');
	return str.replace(before, after);
}

replace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");