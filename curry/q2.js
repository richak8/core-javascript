/*
let fx = compute(Math.sqrt, Math.abs);
fx
ƒ (val) {
  return f1(f2(val));
}
fx(-4); //2
*/

function compute(f1,f2) {
	return function(val) {
		return f1(f2(val));
	}
}