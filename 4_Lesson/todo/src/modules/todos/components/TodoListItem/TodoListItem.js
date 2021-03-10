import React from 'react';
import './TodoListItem.css'
function TodoListItem({ todo, onToggle, onDelete }) {
    function onTodoClick() {
        onToggle(todo.id);
    };
    function onDeleteBtnClick(e) {
        e.stopPropagation();
        onDelete(todo.id);
    };
    return (
        <li
            id={todo.id}
            className={todo.completed ? 'completed' : ''}
            onClick={onTodoClick}
        >
            <label>
                <span className="items-between">
                    <span>{todo.title}</span>
                    <span onClick={(e) => onDeleteBtnClick(e)}>X</span>
                </span>
            </label>
        </li>
    );
}

export default TodoListItem;
