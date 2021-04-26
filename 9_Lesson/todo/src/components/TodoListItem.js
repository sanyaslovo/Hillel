import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    completed: {
        textDecoration: 'line-through',
    },
    between: {
        display: 'flex',
        justifyContent: 'space-between',
    }
}));

export default function TodoListItem({ todo, deleteTodo }) {
    const classes = useStyles();
    function onDeleteBtnClick(e) {
        e.stopPropagation();
        deleteTodo(todo.id);
    };
    return (
        <ListItemText
            id={todo.id}
            className={todo.completed ? classes.completed : ''}
            primary={
                <span className={classes.between}>
                    {todo.title}
                    <CloseIcon onClick={(e) => onDeleteBtnClick(e)} />
                </span>
            }
        />
    );
}
