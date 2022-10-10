let hours=document.querySelector(".H");
let minutes=document.querySelector(".M");
let seconds=document.querySelector(".S");
let milli=document.querySelector(".MS");
let start=document.querySelector(".start")
let stop=document.querySelector(".stop")
let reset=document.querySelector(".reset")
let counter;
start.addEventListener("click",function(){
    reset.disabled=true
    reset.style.opacity=".7"
    counter=setInterval(() => {
        milli.textContent++;
        if(milli.textContent<=9)
        milli.textContent=`0${milli.textContent}`;
    
        if(milli.textContent==100){
            seconds.textContent++;
            if(seconds.textContent<=9)
                seconds.textContent=`0${seconds.textContent}`
            milli.textContent=0
        }
    
        if(seconds.textContent==60){
            minutes.textContent++;
            if(minutes.textContent<=9)
                minutes.textContent=`0${minutes.textContent}`
            seconds.textContent=0
        }
    
        if(minutes.textContent==60){
            hours.textContent++;
            if(hours.textContent<=9)
                hours.textContent=`0${hours.textContent}`
            minutes.textContent=0
        }
        
    
    }, 10);
})
 

stop.addEventListener("click",function(){
    clearInterval(counter)
    reset.disabled=false;
    reset.style.opacity="1"
})
reset.addEventListener("click",function(){
    milli.textContent="00";
    seconds.textContent="00";
    minutes.textContent="00";
    hours.textContent="00";

})
