import React, {useState} from 'react';
import InputForm from './InputForm';
import TodoItem from './TodoItem';

function TodoList() {
    // States
    const [items, setItems] = useState([]); // State that contains the array that holds all the items of the todo list

    // Functions
    function addItem(newItem) { // Functions that adds a new item to the items state array
        setItems(prevItems => {
            return [...prevItems, newItem];
        });
    }

    function deleteItem(id) { // Function that deletes an item from the array by using its id and filtering it out
        setItems(prevItems => {
            return prevItems.filter((item, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div class="todo-div">
            <div class="box" id="heading">
                <h1>Todo List</h1>
            </div>

            <div id="itemBox" class="box">
                {items.map((item, index) => (
                    <TodoItem 
                        key={index}
                        id={index}
                        text={item}
                        onDelete={deleteItem}
                    />
                ))}
                <InputForm onAdd={addItem}/>
            </div>
        </div>
    );
}

export default TodoList;