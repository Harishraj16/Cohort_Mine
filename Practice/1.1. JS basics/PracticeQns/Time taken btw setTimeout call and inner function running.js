let startime = performance.now();

setTimeout(function(){
    let endtime = performance.now();
    console.log(`Time Taken: ${(endtime - startime)/1000} Seconds`);
}, 1000);