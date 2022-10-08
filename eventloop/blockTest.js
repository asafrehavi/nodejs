
//this is very basic example of blocking the event blocking the event loop
//1)at the function checkForEventLoopBlock we should see 
    //print of message the the event loop is free every 0.5 second
//2)the boolean  shouldRunAction is true and should be change to false in 1 seconds to true 
//in order to stop the endless loop
//The endless loop will never stopped due to the fact that the single thread that node run is busy 
//and perform onlu one action at time 

 function checkForEventLoopBlock() {
  setInterval(()=> {
    console.log('event loop is free to take messages at '+ new Date() )
  },500)
}
checkForEventLoopBlock();

var shouldRunAction = true
setTimeout(()=> shouldRunAction =false ,1000)
while(shouldRunAction) {

}