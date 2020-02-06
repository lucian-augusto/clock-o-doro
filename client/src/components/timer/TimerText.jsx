import React from 'react';

function TimerText(props) {
    let text = ''; // Variable that holds the text that appears on the top of the timer section

    if (props.counting) { // Set of conditionals that define the text on the top of the timer section
        if (props.break) {
            text = 'It\'s time to take a break!';
        } else {
            text = 'It\'s time to work!';
        }

    } else if (props.pause) {
        text = 'Timer paused.';

    } else {
        text = 'Click \'Start\' to begin!';
    }

    return(
        <h1 className="round-text" id="round-text">{text}</h1>
    );
}

export default TimerText;