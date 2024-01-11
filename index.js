const display=document.getElementById("display");

let [seconds,minutes,hour]=[0,0,0];
let timer=null;

function logic(){
    seconds++;
    if(seconds==60){
        seconds=0;
        minutes++;
        if(minutes==60){
            minutes=0;
            hour++;
        }
    }

    let h = hour<10?"0"+hour:""+hour;
    let m = minutes<10?"0"+minutes:""+minutes;
    let s = seconds<10?"0"+seconds:""+seconds;

    display.innerHTML=h+":"+m+":"+s;
}

function start(){
    if(timer!=null){
        clearInterval(timer);
    }
    timer=setInterval(logic,1000);
}

function stop(){
    clearInterval(timer);
}

function clearc(){
    clearInterval(timer);
    [seconds,minutes,hour]=[0,0,0];
    display.innerHTML="00:00:00";
}