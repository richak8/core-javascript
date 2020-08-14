Function.prototype.bind = function(...args) {
	let context = this, params = args.slice(1);
	return (...args2) => context.apply(args[0], [...params, ...args2]);
}