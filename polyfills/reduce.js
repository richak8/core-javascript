/*
The reduce() method executes a reducer function (that you provide) 
on each element of the array,resulting in single output value.
- on an empty array without an initialValue will throw a TypeError.
- Parameters: callback(accumulator, currentValue, index, array, initialValue)
*/

Array.prototype.reduce = function(callback, initialValue){
	if(typeof(callback) !== 'function' || this === null || this.length === 0) {
		throw new TypeError();
	}
	let result, start;
	if(initialValue || initialValue === 0) {
		result = initialValue;
		start = 0;
	} else {
		result = this[0];
		start = 1;	
	}
	for(let i = start; i < this.length; i++) {
		result = callback(result, this[i], i, this);
	}
	return result;	
}

