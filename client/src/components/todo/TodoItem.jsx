import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

function TodoItem(props) {
    // States
    const [isChecked, setIsChecked] = useState(false); // State that holds the condition of the checkbox

    // Functions
    function handleCheckbox() { // Function that changes the 'isChecked' state based on the checkbox
        setIsChecked(prevState => !prevState);
    }

    function handleDeleteClick() { // Function that calls a component prop that calls a function from the parent component using
        // the item's id prop as an input
        props.onDelete(props.id);
    }

    return (
        <div class="item">
            {isChecked && <button onClick={handleDeleteClick} className="delete-btn"><DeleteIcon /></button>} {/* Only renders
            the delete button if the checkbox is active */}
            <input type="checkbox" onClick={handleCheckbox}/>
            <p>{props.text}</p>  
        </div>
    );
}

export default TodoItem;