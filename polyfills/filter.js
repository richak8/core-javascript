/**
The filter() method creates a new array with all elements that
pass the test implemented by the provided function.
Parameters: callback(element, index, array), thisArg
callback: Return true to keep the element, false otherwise.
**/

Array.prototype.filter = function(callback, thisArg){
	if((typeof(callback) !== 'function') || this === null) {
		throw new TypeError();
	}
	const result = [];
	for(let i = 0; i < this.length; i++) {
		if(callback.call(thisArg, this[i], i, this)) {
			result.push(this[i]);
		}
	}
	 return result;
}