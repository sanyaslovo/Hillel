import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
            primary={
                <span className={classes.between}>
                    {todo.title}
                    <CloseIcon onClick={(e) => onDeleteBtnClick(e)} />
                </span>
            }
        />
    );
}
