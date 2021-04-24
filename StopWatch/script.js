
let milliSecond=document.getElementById('milliSecond');
let seconds=document.getElementById('seconds');
let minutes=document.getElementById('minutes');
let hours=document.getElementById('hours');

let milliSecondCounter=0;
let secondConunter=0;
let minuteConunter=0;
let hourConunter=0;


let start=document.getElementById('start');
let stopp=document.getElementById('stop');
let reset=document.getElementById('reset');

let interval;

function startTime(){
    milliSecondCounter++
    
    //for milliseccond
    if ( milliSecondCounter < 9 ) {

        milliSecond.innerHTML = '0' + milliSecondCounter;
    }
    
    if ( milliSecondCounter >= 9 ){

        milliSecondCounter = '0';

        secondConunter ++;

        milliSecond.innerText = '0' + milliSecondCounter;

        seconds.innerText = '0' + secondConunter;

        //for seconds
        if ( secondConunter >= 10 && secondConunter < 60 ){

            seconds.innerText = secondConunter ;
        }
         if ( secondConunter >= 60 ){
            secondConunter = '0';
            minuteConunter ++;
            minutes.innerText = '0' + minuteConunter; 
            seconds.innerText = '0' + secondConunter; 

            //for minutes
            if ( minuteConunter >= 10 && minuteConunter < 60 ){

                minutes.innerText = minuteConunter ;
            }
            if( minuteConunter >= 60 ){
                minuteConunter = '0';
                hourConunter ++;
                hours.innerText = '0' + hourConunter; //for hours
                minutes.innerText = '0' + minuteConunter; 
            }
            }
        
        
    }

}

start.onclick = function () {
    interval = setInterval(startTime,100)
}

stopp.onclick = function () {
    clearInterval(interval);
}

reset.onclick = function () {
    clearInterval(interval);
    milliSecondCounter = '00';
    secondConunter = '00';
    minuteConunter = '00';
    hourConunter = '00';
    milliSecond.innerHTML = milliSecondCounter;
    seconds.innerHTML = secondConunter;
    minutes.innerHTML = minuteConunter;
    hours.innerHTML = hourConunter;
    
}

 