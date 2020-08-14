/*
The forEach() method executes a provided function once for each array element.
Parameters: callback(element, index, array), thisArg
*/
Array.prototype.forEach = function(callback, thisArg){
	if(typeof(callback) !== 'function' || this === null) {
		throw new TypeError();
	}
	for(let i = 0; i < this.length; i++) {
	   callback.call(thisArg, this[i], i, this);
	}	
}