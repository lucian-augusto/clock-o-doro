import React, { useState } from 'react';

function InputForm(props) {
    // States
    const [text, setText] = useState(''); // State that holds the value of the input field

    // Functions
    function handleSubmit(event) { // Funtion that handles de submit request by preventing the page refresh and sends the content
        // of the input field to the TodoList component 
        event.preventDefault();
        props.onAdd(text)
        setText(''); // Sets the value of the input field to an empty string
    }

    function handleChange(event) { // Function that saves every change on the input field into a state, harcoding the value of the field into said state
        setText(event.target.value);
    }

    return(
        <div>
        <form id="itemFormClient" onSubmit={handleSubmit} className="item item-form" action="/" method="post">
            <input id="newItem" onChange={handleChange} type="text" value={text} name="newItem" placeholder="New Item" autoComplete="off"/>
            <button className="submit-btn" type="submit" name="button" value="Todo List">+</button>
        </form>
        </div>
    );
}

export default InputForm;