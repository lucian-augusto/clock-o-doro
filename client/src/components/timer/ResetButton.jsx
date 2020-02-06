import React from 'react';
import StopIcon from '@material-ui/icons/Stop';

function ResetButton(props) {
    // Functions
    function handleClick() { // Funciton that calls the function that resets the timer by using a prop that has said function
        // linked
        props.onClick();
    }

    return (
        <button onClick={handleClick} className="btn btn-outline-danger btn-lg" id="reset">
            <StopIcon fontSize="large"/> Reset
        </button>
    );
}

export default ResetButton;