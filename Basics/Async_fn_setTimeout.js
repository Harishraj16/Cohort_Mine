function findsum(n){
    let ans=0;
    for(let i=1;i<=n;i++){
        ans += i;
    }
    return ans;
}

function printsum(){
    console.log("Sum: " + findsum(100));
    console.log(Math.floor(performance.now()/1000) + " second");
}

setTimeout(printsum,1000);
console.log(Math.floor(performance.now()/1000) + " second" );
