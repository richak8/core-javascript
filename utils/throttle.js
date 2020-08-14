/*
1. Used to optimize the performace of web app
2. It is achieved by limiting the rate of execution of particular function
3. The first click gets fired
*/

const throttle = (fn, delay) => {
    let last = 0;
    return (...args) => {
        const now = new Date().getTime();
        if(now - last < delay) return;
        last = now;
        return fn(...args);
    }
}