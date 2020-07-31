/*
The Object.create() method creates a new object, 
using an existing object as the prototype of the newly created object.
*/

if(!Object.hasOwnProperty('create')) {
  Object.create = function(obj) {
	if( typeof(obj) !== 'object' || obj === null) {
	  throw new TypeError();
  }	
    function TempObj() {};
    TempObj.prototype = obj;
    return new TempObj();
  }
}