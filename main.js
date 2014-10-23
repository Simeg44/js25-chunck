var chunk = function(array, num) {
	var parts = Math.floor(array.length / num);
	var newArray = [];
	var additive = array.length % num;

	var i = 0;
	while (i < array.length) {
		var tempArray = [];
		if (additive !== 0) {
			for (var j = 0; j < parts + 1; j++) {
				tempArray.push(array[i]);
				i++;
			}
			additive--;
		}
		else {
			for (var j = 0; j < parts; j++) {
				tempArray.push(array[i]);
				i++;
			}
		}
		newArray.push(tempArray);
	}
	return newArray;
	
}

console.log(chunk([1,2,3,4,5,6,7,8,9,10], 2));
console.log(chunk([1,2,3,4,5,6,7,8,9,10], 3));
console.log(chunk([1,2,3,4,5,6,7,8,9,10], 7));