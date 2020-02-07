import React, { useState } from 'react';
import ResetButton from './ResetButton';
import StartButton from './StartButton';
import TimerText from './TimerText';
import alertSoundFile from '../sounds/alertSound.mp3';

function PomodoroTimer() {
    // Global Constants/Variables
    const defaultWorkTime = 25;
    const defaultShortPause = 5;
    const defaultLongPause = 15;

    // States
    const [time, setTime] = useState({ // State that holds the values of minutes and seconds for the timer
        minutes: defaultWorkTime,
        seconds: 0
    })
    const [timer, setTimer] = useState(''); // State that holds the timer values
    const [round, setRound] = useState(0); // State that keeps track of which round the timer is 
    const [isCounting, setIsCounting] = useState(false); // State that holds the condition if the timer is running
    const [isPaused, setIsPaused] = useState(false); // State that holds the condition where the timer is paused
    const [breakTime, setBreakTime] = useState(false); // State that keeps track fo the break sessions
    const [buttonName, setButtonName] = useState('Start'); // State that holds the label that changes the Start/Pause/Resume
    // button

    // Functions
    function handleStartPause() { // Function that handles the events after pressing the Start/Pause/Resume button, starting
        // (restarting) or pausing the timer
        if (isCounting) {
            pauseTimer()
        } else {
            startTimer();
        }
    }

    function nextRound() { // Functions that advances the round and restarts the timer and sets the break condition state
        setRound(prevRound => {
            let newRound = prevRound + 1;

            setBreakTime(prevValue => !prevValue);

            if (newRound % 2 === 0) {
                setTime(() => {
                    return ({
                        minutes: defaultWorkTime,
                        seconds: 0
                    });
                });
            } else {
                if (newRound === 5) {
                    newRound = -1;
                    setTime(() => {
                        return ({
                            minutes: defaultLongPause,
                            seconds: 0
                        });
                    });
                } else {
                    setTime(() => {
                        return ({
                            minutes: defaultShortPause,
                            seconds: 0
                        });
                    });
                }
            }
            if (newRound !== 0) {
                startTimer();
            } else {
                reset();
            }

            return(newRound); 
        });
        
    }

    function pauseTimer() { // Funciton that pauses the timer and sets the states accodingly
        setIsPaused(true);
        setIsCounting(false);
        setButtonName('Resume');
        setTimer(prevValue => clearInterval(prevValue));
    }

    function playAudio() { // Function that plays a sound whenever the timer transitions from a work time to a break
        // time of vice versa
        const audio = new Audio(alertSoundFile);
        audio.play();
    }

    function reset() { // Funciton that resets the timer and all the related states to their initial values
        setTimer(prevValue => clearInterval(prevValue));
        setIsCounting(false);
        setIsPaused(false);
        setBreakTime(false);
        setRound(0);
        setButtonName('Start');
        setTime({
            minutes: defaultWorkTime,
            seconds: 0
        })
    }

    function startTimer() { // Funciton that starts the timer and sets the states accodingly
        setIsCounting(true);
        setIsPaused(false);
        setButtonName('Pause');
        setTimer(() => setInterval(timerCountdown, 1000));
    }

    function timerCountdown() { // Function that actually makes the countdown and set the state of the timer that is rendered
        // on the screen
        setTime(prevValue => {
            const newValue = {
                minutes: prevValue.minutes,
                seconds: prevValue.seconds - 1
            }
            if (newValue.seconds <= 0) {
                if (newValue.minutes === 0) {
                    setTimer(prevValue => clearInterval(prevValue));
                    playAudio();
                    setTimeout(nextRound, 300);
                } else {
                    newValue.minutes = newValue.minutes - 1;
                    newValue.seconds = 59;
                }
            } 
            return (newValue);
        });
    }

    return (
        <div className="container-fluid clock-div">
            <TimerText 
                counting={isCounting}
                pause={isPaused}
                break={breakTime}
            />
            <h1 className={"clock" + (breakTime ? " white-text" : "")} id="clock">
                {("0" + time.minutes).slice(-2)}:{("0" + time.seconds).slice(-2)}
            </h1>
            <StartButton 
                type={buttonName}
                onClick={handleStartPause}
            />
            <ResetButton onClick={reset} />
        </div>
    );
}

export default PomodoroTimer;