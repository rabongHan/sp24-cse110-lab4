const intervalID = setInterval(timePrint, 1000);

function timePrint() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}