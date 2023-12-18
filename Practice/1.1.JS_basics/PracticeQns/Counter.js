function countdown(){
    let counter = 5;
    let interval=setInterval(function(){    //here interval variable is important you may think it is not needed but if it is not there it causes memory leaks and count goes even after 0 in negatives like -1,-2 and so on!
    console.log(counter);
    counter--;
    if(counter===0){
            clearInterval(interval);
            console.log("Counting Completed!");
        }
    },1000);
}
countdown();