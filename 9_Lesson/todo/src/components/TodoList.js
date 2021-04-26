import React  from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TodoListItem from '../components/TodoListItem';

export default function TodoList({ todos, toggleTodo, deleteTodo }) {
    function onTodoClick(id) {
        toggleTodo(id);
    };
    return (
        <>
            {
                todos && todos.length
                ? todos.map((todo) => (
                    <ListItem
                        key={todo.id}
                        button
                        onClick={() => onTodoClick(todo.id)}
                    >
                        <TodoListItem
                            todo={todo}
                            toggleTodo={toggleTodo}
                            deleteTodo={deleteTodo}
                        />
                    </ListItem>
                ))
                : (
                    <ListItem>
                        <ListItemText primary="No Todos 😫" />
                    </ListItem>
                )
            }
        </>
    );
}
