import React, { useState } from 'react';

import './TodoList.css';

function ListItem({ todos, onToggle, onDelete }) {
    return (
        <ul className="List">
            <li id={todo.id} className={todo.completed ? 'completed' : ''}>
                <label>
                    <input
                       type="checkbox"
                       defaultChecked={completed}
                       onChange={toggleChange}
                    />
                    {todo.title}
                </label>
            </li>
        </ul>
    );
}

export default ListItem;
