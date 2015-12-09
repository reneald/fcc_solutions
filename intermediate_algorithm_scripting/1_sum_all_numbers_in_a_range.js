function sumAll(arr) {
	arr.sort(function(a, b) {
		return a - b;
	});
	for (var i = arr[0] + 1; i < arr[1]; i++) {
		arr.push(i);
	}
	return arr.reduce(function(previousValue, currentValue)) {
		return previousValue + currentValue;
	}
}

sumAll([1, 4]);