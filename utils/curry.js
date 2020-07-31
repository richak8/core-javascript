/*
Currying is a transform that makes f(a,b,c) callable as f(a)(b)(c).
*/

function curry(func) {
	const args = [];
	return function curried(...args2) {
		args.push(...args2);
		if(args.length >= func.length) {
			return func.apply(this, args);
		} else {
			return curried;
		}
	}
}