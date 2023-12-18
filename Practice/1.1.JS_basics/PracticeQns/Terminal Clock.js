function updateClock(){
    const date = new Date();
    const hour = date.getHours().toString().padStart(2,'0');
    const minutes = date.getMinutes().toString().padStart(2,'0');
    const seconds = date.getSeconds().toString().padStart(2,'0');

    const time = `${hour}:${minutes}:${seconds}`;
    console.clear();
    console.log(time);
}

setInterval(updateClock,1000)