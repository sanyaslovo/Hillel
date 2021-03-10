import React, { useState } from 'react';
import './TodoForm.css';

function TodoForm({ onSave }) {
    const [ todo, setTodo ] = useState({title: ''})
    function onInputChange(e) {
        setTodo({
            ...todo, [e.target.name]: e.target.value
        });
    }
    function onFormSubmit(e) {
        e.preventDefault();
        onSave(todo);
        setTodo({ title: '' });
    }
    return(
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                name="title"
                value={todo.title}
                onChange={onInputChange}
            />
            <button>Save</button>
        </form>
    );
}

export default TodoForm;