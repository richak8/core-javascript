function add(a,b,c){
    return a+b+c
  }
 
const addWithCurry = makeCurry(add);
console.log(addWithCurry()()()(1)()(2)()()(3))
console.log(addWithCurry()()()(1, 2)(5))


// Solution

function makeCurry(f) {
	const args = [];
	return function curried(...args1) {
		args.push(...args1);
		if(args.length >= f.length) {
			return f.apply(this, args);
		} else {
			return curried;
		}
	}
}