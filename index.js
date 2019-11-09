// jshint esversion:6

// Global constants/variables
const _defaultWorkMinutes = 25;
const _defaultPauseMinutes = 5;
const _defalutLongPause = 15;
const _defaultSeconds = 0;

let clockVar = '';
let minutes = _defaultWorkMinutes;
let seconds = 0;
let pomodoroRound = 1;
let pauseRound = 0;

// Click event listener
$('.btn').click(clickHandler);

// Functions
function clickHandler() { // Function that handles the click events on the buttons
  const clickedButtonId = $(this).attr('id');
  if (clickedButtonId === 'reset') {
    pomodoroReset();
  } else if (clickedButtonId === 'start') {
    $('#round-text').text('It\'s time to Work!');
    startCount();
    $(this).prop('id', 'pause');
    $(this).html('<i class="fas fa-pause" id="run-icon"></i> Pause');

  } else if (clickedButtonId === 'pause') {
    clearInterval(clockVar);
    $(this).prop('id', 'start');
    $(this).html('<i class="fas fa-play" id="run-icon"></i> Resume');
  }
}

function nextRound() { // Funciton that stars a new round after determining iif it's a pause or work round
  if (pomodoroRound === pauseRound) {
    $('#clock').toggleClass('white-text');
    $('#round-text').text('It\'s time to Work!');
    if (pomodoroRound === 4) {
      pomodoroReset();
    } else {
      pomodoroRound++;
      minutes = _defaultWorkMinutes;
      seconds = _defaultSeconds;
    }
  } else {
    pauseRound++;
    $('#clock').toggleClass('white-text');
    $('#round-text').text('It\'s time to take a break!');
    if (pauseRound === 4) {
      minutes = _defalutLongPause;
      seconds = _defaultSeconds;
    } else {
      minutes = _defaultPauseMinutes;
      seconds = _defaultSeconds;
    }
  }
  startCount();
}

function playAudio(fileName) { // Function that plays audio
  const audio = new Audio('sounds/' + fileName + '.mp3');
  audio.play();
}

function pomodoroReset() { // Resets the clock and all the rounds.
  clearInterval(clockVar);
  $('#clock').removeClass('white-text');
  $('#pause').prop('id', 'start');
  $('#start').html('<i class="fas fa-play" id="run-icon"></i> Resume');
  $('#round-text').text('Click Start to begin!');
  minutes = _defaultWorkMinutes;
  seconds = _defaultSeconds;
  pomodoroRound = 1;
  pauseRound = 0;
  updateClock();
}

function startCount() { // Function that starts timer
  clockVar = setInterval(timerCount, 1000);
}

function timerCount() { // Function that executes the timer
  seconds--;
  if (seconds <= 0) {
    if (minutes == 0) {
      clearInterval(clockVar);
      playAudio('alertSound');
      setTimeout(nextRound, 300);
    } else {
      minutes--;
      seconds = 59;
    }
  }
  updateClock();
}

function updateClock() { // Function that updates the clock on the page
  const minuteClockText = ("0" + minutes).slice(-2);
  const secondClockText = ("0" + seconds).slice(-2);

  $('#clock').text(minuteClockText + ':' + secondClockText);
}
