function chunk(arr, size) {
	var chunkArr = [];
	for (var i = 0; i < arr.length; i += size) {
		chunkArr.push(arr.slice(i, i + size));
	}
	return chunkArr;
}

chunk(['a', 'b', 'c', 'd'], 2);