import React from 'react';
import PauseIcon from '@material-ui/icons/Pause';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';


function StartButton(props) {
    // Functions
    function handleClick() { // Funciton that calls the function 'handleStartPause' timer by using a prop that has said function
        // linked
        props.onClick();
    }

    return (
        <button onClick={handleClick} className="btn btn-outline-secondary btn-lg" id={props.type.toLowerCase()}>
            {(props.type === 'Pause') ? <PauseIcon fontSize="large"/> : <PlayArrowIcon fontSize="large"/>}{props.type}
        </button>
    );
}

export default StartButton;