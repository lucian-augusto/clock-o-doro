// jshint esversion:6

// Global constants/variables
const _defaultWorkMinutes = 25;
const _defaultPauseMinutes = 5;
const _defalutLongPause = 15;
const _defaultSeconds = 0;

let clockVar = '';
let minutes = _defaultWorkMinutes;
let seconds = _defaultSeconds;
let pomodoroRound = 1;
let pauseRound = 0;

// Click event listener
$('.btn').click(clickHandler);

// Functions
function clickHandler() { // Function that handles the click events on the buttons
  const clickedButtonId = $(this).attr('id');
  textHandler(clickedButtonId);

  if (clickedButtonId === 'reset') {
    pomodoroReset();
  } else if (clickedButtonId === 'start' || clickedButtonId === 'resume') {

    startCount();
    $(this).prop('id', 'pause');
    $(this).html('<i class="fas fa-pause" id="run-icon"></i> Pause');

  } else if (clickedButtonId === 'pause') {
    clearInterval(clockVar);
    $(this).prop('id', 'resume');
    $(this).html('<i class="fas fa-play" id="run-icon"></i> Resume');
  }
}

function nextRound() { // Funciton that stars a new round after determining iif it's a pause or work round
  if (pomodoroRound === pauseRound) {
    $('#clock').toggleClass('white-text');
    pomodoroRound++;
    minutes = _defaultWorkMinutes;
    seconds = _defaultSeconds;
  } else {
    pauseRound++;
    $('#clock').toggleClass('white-text');

    if (pauseRound === 4) {
      minutes = _defalutLongPause;
      seconds = _defaultSeconds;
    } else {
      minutes = _defaultPauseMinutes;
      seconds = _defaultSeconds;
    }
  }
  if (pomodoroRound > 4) {
    textHandler('reset');
    pomodoroReset();
  } else {
    textHandler('start');
    startCount();
  }
}

function playAudio(fileName) { // Function that plays audio
  const audio = new Audio('sounds/' + fileName + '.mp3');
  audio.play();
}

function pomodoroReset() { // Resets the clock and all the rounds.
  clearInterval(clockVar);
  $('#clock').removeClass('white-text');
  $('#pause').prop('id', 'start');
  $('#start').html('<i class="fas fa-play" id="run-icon"></i> Start');
  minutes = _defaultWorkMinutes;
  seconds = _defaultSeconds;
  pomodoroRound = 1;
  pauseRound = 0;
  updateClock();
}

function startCount() { // Function that starts timer
  clockVar = setInterval(timerCount, 1000);
}

function textHandler(statusText) { // Function that handles the modifications of the head text
  switch (statusText) {
    case 'start':
    case 'resume':
      if (pomodoroRound === pauseRound) {
        $('#round-text').text('It\'s time to take a break!');
      } else {
        $('#round-text').text('It\'s time to Work!');
      }
      break;

    case 'pause':
      $('#round-text').text('Timer paused.');
      break;

    case 'reset':
      $('#round-text').text('Click \'Start\' to begin!');
      break;

    default:
      break;
  }
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

function updateClock() { // Function that updates the timer on the screen
  const minuteClockText = ("0" + minutes).slice(-2);
  const secondClockText = ("0" + seconds).slice(-2);

  $('#clock').text(minuteClockText + ':' + secondClockText);
}
