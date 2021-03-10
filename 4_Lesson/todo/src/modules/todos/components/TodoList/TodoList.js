import React  from 'react';
import TodoListItem from "../TodoListItem/TodoListItem";

function TodoList({ todos, onToggle, onDelete }) {
    return (
        <ul className="List">
            {todos.map((todo) => (
                <TodoListItem
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
}

export default TodoList;
