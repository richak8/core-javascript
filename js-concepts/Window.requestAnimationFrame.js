/*
- The window.requestAnimationFrame() method tells the browser that you wish
 to perform an animation and requests that the browser calls a specified 
 function to update an animation before the next repaint. 
 The method takes a callback as an argument to be invoked before the repaint.
- call this method whenever ready to update your animation onscreen.
  This will request that your animation function be called before 
  the browser performs the next repaint. 
- The number of callbacks is usually 60 times per second.
- requestAnimationFrame() calls are paused in most browsers when running 
  in background tabs or hidden <iframe>s in order to improve performance 
  and battery life.
- Syntax: window.requestAnimationFrame(callback);
- Parameters: callback -> function to call when it's time to update your 
    animation for the next repaint.
    The callback function is passed one single argument, a DOMHighResTimeStamp 
    indicating the point in time when requestAnimationFrame() starts 
    to execute callback functions.
- Return value: A long integer value, the request id, that uniquely identifies
  the entry in the callback list. This is a non-zero value, but you may not 
  make any other assumptions about its value. You can pass this value to
  window.cancelAnimationFrame() to cancel the refresh callback request.    
*/

// HTML
<div id="request-animation"></div>

//Js
let ele = document.querySelector('#request-animation');
let start;

function step(timestamp) {
  if(start === undefined) start=timestamp;
  const elapsed = timestamp - start;
  ele.style.transform = 'translateX('+ Math.min(0.1*elapsed, 200)+'px)';
  if(elapsed < 2000) {
    window.requestAnimationFrame(step)
  }
}
window.requestAnimationFrame(step);