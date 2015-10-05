function diff(arr1, arr2) {
	//defining callback function: checking if an item is absent in one of both original arrays
	function check(item) {
		if (arr1.indexOf(item) === -1 || arr2.indexOf(item) === -1) {
			return item;
		};
	}
	//create empty array to catch empty arrays
	var newArr = [];
	//concatenate both original arrays for easy filtering
	newArr = arr1.concat(arr2).filter(check);

	return newArr;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);