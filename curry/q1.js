/*
fn(2,7)(3,1,2)(7,8,9)()
o/p -> 2 7 3 1 2 7 8 9
*/

function fn(...args1) {
	const args = [];
	args.push(...args1);
	return function fx(...args2){
		args.push(...args2);
		if(args2.length > 0) {
			return fx;
        } else {
			console.log(...args);
        }
	}
}