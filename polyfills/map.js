/*
The map() method creates a new array populated with the results 
of calling a provided function on every element in the calling array.
Parameters (callback(currentValue, index, array), thisArg)
callback: Each time callback executes, the returned value is added to new_array.
*/

Array.prototype.map = function(callback, thisArg){
	if(typeof(callback) !== 'function' || this === null) {
		throw new TypeError();
	}
	const result = [];
	for(let i = 0; i < this.length; i++) {
		result.push(callback.call(thisArg, this[i], i, this));
	}
	return result;	
}