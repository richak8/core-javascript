/*
let a = increCount();
a
ƒ () {
		return count++;
	}
a() //1
a() //2
a() //3
*/

function increCount(){
	let count = 1;
	return function() {
		return count++;
	} 
}

function increCount(count){
	return function() {
		return count++;
	} 
}