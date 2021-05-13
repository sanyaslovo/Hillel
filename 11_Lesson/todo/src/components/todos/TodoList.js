import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TodoListItem from '../todos/TodoListItem';

const useStyles = makeStyles(() => ({
    completed: {
        backgroundColor: '#54d226',
        textDecoration: 'line-through',
    },
}));

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
    const classes = useStyles();
    const onTodoClick = (todo) => toggleTodo(todo);
    return (
        <>
            {
                todos && todos.length
                ? todos.map((todo) => (
                    <ListItem
                        style={{cursor: 'pointer'}}
                        key={todo.id}
                        className={todo.isDone ? classes.completed : ''}
                        onClick={() => onTodoClick(todo)}
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

export default TodoList;
