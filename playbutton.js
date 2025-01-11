const video = document.getElementsByClassName("developers");
const play = document.getElementsByClassName("playButton");
const icon = document.getElementsByClassName("icon");
let rotate = false;
let runner;
let degrees = 0;

play[0].addEventListener("click", playPauseVideo);

function playPauseVideo() {
  if (video[0].paused) {
    video[0].play();
  } else {
    video[0].pause();
  }
}

function rotatingIcon() {
  runner = setInterval(function () {
    degrees++;
    icon[0].style.transform = "rotate(" + degrees + "deg)";
    console.log(degrees);
  }, 1);
}

function stop(){
    clearInterval(runner);
}

play[0].addEventListener('click', function(){
    if (!rotate){
        rotate = true;
        rotatingIcon();
    } else {
        rotate = false;
        stop();
    }
})

// rotatingIcon();
console.log(degrees);
