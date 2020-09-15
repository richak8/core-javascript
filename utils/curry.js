/*
- Currying is a transformation of functions that translates a function from 
callable as f(a, b, c) into callable as f(a)(b)(c).
- Currying doesn’t call a function. It just transforms it.
*/

function curry(f) {
	return function(a) {
		return function(b) {
			return f(a,b);
		}
	}
}

function sum(a,b) {
	return a + b;
}

let curriedSum = curry(sum);

// curriedSum(1)(2) o/p -> 3

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