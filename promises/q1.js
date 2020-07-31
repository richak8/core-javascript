/*
Any termination other than a throw creates a "resolved" state, 
while terminating with a throw creates a "rejected" state.   
*/

new Promise((reject) => reject())
.then(console.log('success1')) // success1
.catch(console.log('error')) //  error
.then(console.log('success2')); // success2
 
// Promise {<resolved>: undefined}