/*
Event loop is an array that acts as a queue
*/

const eventLoop = [];
let event;

while(true) {
    if(eventLoop.length > 0) {
        event = eventLoop.shift();
        try {
            event();
        }catch(err) {
            console.log(err);
        } 
    }
}