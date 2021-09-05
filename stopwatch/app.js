var milliseconds = 0
var seconds = 0
var min = 0

var milliseconds = document.getElementById("milliseconds")
var seconds = document.getElementById("seconds")
var min = document.getElementById("min")

// setTimeout()
// setInterval()

function timer(){
    milliseconds++
    milliseconds.innerHTML = milliseconds
    if(milliseconds==1000){
       sec++
       sec.innerHTML = sec
       milliseconds = 0
     if(sec==60){
       min++
       min.innerHTML = min
     }
    }
}

var  interval;
function start(){
   interval = setInterval(timer,10);
}

function pause(){
    clearInterval = (interval)

}

function reset(){
    pause()
    milliseconds = 0
    sec = 0
    min = 0
    milliseconds.innerHTML = milliseconds
    sec.innerHTML = sec
    min.innerHTML = min
}

// countdowntimer

var milliseconds = 0
var seconds = 0
var min = 0

var milliseconds = document.getElementById("milliseconds")
var seconds = document.getElementById("seconds")
var min = document.getElementById("min")

function countdowntimer(){
    milliseconds--
    milliseconds.innerHTML = milliseconds
    if(milliseconds == 1000){
      sec--
    } milliseconds = 0

    if(sec==60){
     min--

     min.innerHTML = min
    }
}

function time(){
  
}






