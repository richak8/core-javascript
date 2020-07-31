/*** Input-1 ***/
// const countries = {
//     canada: "America",
//     usa: "America",
//     mexico: "America",
//     france: "Europe",
//     germany: "Europe",
//     spain: "Europe",
//     poland: "Europe",
//     india: "Asia",
//     china: "Asia",
//     japan: "Asia",
//     thailand: "Asia",
//     kenya: "Africa",
//     sudan: "Africa",
//     mali: "Africa",
//     algeria: "Africa",
// };

/*** Input-2 ***/
// const data = {
//     france: {
//         orders: 1860,
//         customers: 89
//     },
//     spain: {
//         orders: 459,
//         customers: 34
//     },
//     india: {
//         orders: 5398,
//         customers: 678
//     }
// };

// Expected output:
// {
//     europe: {
//         orders: 2319,
//         customers: 123
//     },
//     america: {
//         orders: 0,
//         customers: 0
//     },
//     asia: {
//         orders: 5398,
//         customers: 678
//     },
//     africa: {
//         orders: 0,
//         customers: 0
//     }
// }

function objManipulation(data, countries) {
	let orders = 0, customers = 0; 
	const result = {};
    for(let key in countries) {
        if(key in data) {
			if(countries[key] in result) {
                orders += data[key].orders;
                customers += data[key].customers;
            } else {
                orders = data[key].orders;
                customers = data[key].customers;
            }
			result[countries[key]] = { 
				orders: orders,
				customers: customers
			};
        } else if(!(countries[key] in result)) {
			result[countries[key]] = { 
				orders: 0,
				customers: 0
			};
		}
    }
    return result;
}
