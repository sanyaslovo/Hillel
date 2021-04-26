import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TodoListItem from '../components/TodoListItem';

const useStyles = makeStyles((theme) => ({
    completed: {
        backgroundColor: '#54d226',
        textDecoration: 'line-through',
    },
}));

export default function TodoList({ todos, toggleTodo, deleteTodo }) {
    const classes = useStyles();
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
                        className={todo.completed ? classes.completed : ''}
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
