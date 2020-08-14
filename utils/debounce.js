/*
1. Used to optimize the performace of web app
2. The last click gets fired after the delay
*/

const debounce = (fn, delay) => {
    let timeoutID;
    return function(...args) {
        if(timeoutID) clearTimeout(timeoutID);
        timeoutID = setTimeout( () => {
            fn(...args);
        }, delay)
    }
}
