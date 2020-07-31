function deepClone(input){
    if(input !== null && Array.isArray(input)){
        const cloneArr = [];
        for(let i = 0; i < input.length; i++) {
            if(input[i] !== null && Array.isArray(input[i])){
                cloneArr[i] = deepClone(input[i]);
            } else {
                cloneArr[i] = input[i]; 
            }
        }
        return cloneArr;
     }
    else if(input !== null && typeof(input) === 'object'){
        const cloneObj = {};
        for(let key in input){
            if(input.hasOwnProperty(key)) {
                if(input[key] !== null && typeof(input[key]) === 'object'){
                    cloneObj[key] = deepClone(input[key]);
                } else {
                    cloneObj[key] = input[key]; 
                }
            }
        }
        return cloneObj;
    }
}