let startBtn = document.getElementById("start")
let stopBtn = document.getElementById("stop")
let resetBtn = document.getElementById("reset")
const containerBg = document.getElementById("container")
var audio = new Audio('bell.mp3');
audio.volume=0.001

let minute = 00
let second = 00
let count = 00
timer = false

startBtn.classList.remove("active");


startBtn.addEventListener("click", function () {
  if (timer) {
    return
  }
  timer = true
  changeButton();
  stopWatch()
})

stopBtn.addEventListener("click", function () {
  timer = false
})

resetBtn.addEventListener("click", function () {
  timer = false
  minute = 0
  second = 0
  count = 0
  document.getElementById("min").innerHTML = "00"
  document.getElementById("sec").innerHTML = "00"
  containerBg.style.backgroundColor='rebeccapurple';
  changeButton();
  
})

function stopWatch() {
  if (timer) {
    count++

    if (count == 100) {
      second++
      count = 0
    }

    if (second == 60) {
      minute++
      second = 0
    }

    if (minute == 60) {
      hour++
      minute = 0
      second = 0
    }
    if(minute == 1 && second == 0){
            changeColor();
            audio.play();
    }
    let minString = minute
    let secString = second
    let countString = count

    if (minute < 10) {
      minString = "0" + minString
    }

    if (second < 10) {
      secString = "0" + secString
    }

    if (count < 10) {
      countString = "0" + countString
    }

    document.getElementById("min").innerHTML = minString
    document.getElementById("sec").innerHTML = secString
    setTimeout(stopWatch, 10)
  }
}

setTimeout(audio.play(),1);
function changeColor(){
    containerBg.style.backgroundColor='red';
}
function changeButton(){
    startBtn.classList.toggle("active");
}