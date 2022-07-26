var milli_sec = 0;
var sec = 0;
var min = 0;
var hours = 0;
var timer = null;
var present_time = document.querySelector(".timer");

document.querySelector(".start_timer").addEventListener('click' , () =>{
    if(timer != null){
        clearInterval(timer);
    }
    timer = setInterval(display,10);
});

document.querySelector(".stop_timer").addEventListener('click', ()=>{
    clearInterval(timer);
});

document.querySelector(".reset_timer").addEventListener('click', ()=> {
    clearInterval(timer);
    [milli_sec,sec,min,hours] = [0,0,0,0];
    present_time.innerHTML = '00 : 00 : 00 : 000';
});

function display(){
    milli_sec+=10;
    if(milli_sec == 1000){
        milli_sec = 0;
        sec++;
        if(sec == 60){
            sec = 0;
            min++;
            if(min == 60){
                min = 0;
                hours ++;
            } 
        }
    }

    
let h = hours <10 ? "0" + hours : hours;
let m = min <10 ? "0" + min : min;
let s = sec <10 ? "0" + sec : sec;
let ms = milli_sec <10 ? "00" + milli_sec : milli_sec < 100 ? "0" + milli_sec : milli_sec;

present_time.innerHTML = ` ${h} : ${m} : ${s} : ${ms} `;

}
