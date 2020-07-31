//Input
// const obj = {
//     id: 10,
//     userId: 122349,
//     accStatus: "NORMAL",
//     details: {
//         code: "qwerty",
//         status: "ACTIVE",
//         date: 1590508556000
//     }
// }

//Ouput 
// {
//     obj1: {
//         accStatus: "NORMAL",
//         id: 10,
//         userId: 122349
//     },   
//     obj2: {
//       code: "qwerty",
//       date: 159050855600,
//       status: "ACTIVE"
//     }
// }

function objManipulation(obj) {
	const obj1 = {};
	let obj2;
	for(let key in obj) {
		if(obj[key] !== null && typeof(obj[key]) === 'object') {
		  obj2 = obj[key];	
		} else {
		  obj1[key] = obj[key];	
		}
	}	
	return {obj1, obj2};
}
