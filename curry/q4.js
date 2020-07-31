// Implement fn
// let fb = fn(1, 2) // [1, 2]
// fb = fb(3, 4) // [1, 2, 3, 4]
// fb = fb(10) // [1, 2, 3, 4, 10]
// fb = fb(14) // [1, 2, 3, 4, 10, 14]

function fn(...args1) {
   const args = [];
   args.push(...args1);
   console.log(args);
   return function fb(...args2) {
     args.push(...args2);
     console.log(args);
     return fb;
   }
}