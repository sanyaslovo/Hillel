import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        width: '100%',
    },
}));

export default function TodoForm({ addTodo }) {
    const classes = useStyles();
    const [ newTodo, setNewTodo ] = useState({title: ''})
    function onInputChange(e) {
        setNewTodo({
            ...newTodo, [e.target.name]: e.target.value
        });
    }
    function onFormSubmit(e) {
        e.preventDefault();
        addTodo(newTodo);
        setNewTodo({ title: '' });
    }
    return(
        <FormControl className={classes.textField}>
            <InputLabel htmlFor="todo">Add Todo</InputLabel>
            <Input
                id="todo"
                type="text"
                name="title"
                value={newTodo.title}
                onChange={onInputChange}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="submit"
                            onClick={onFormSubmit}
                        >
                            <ArrowForwardIcon />
                        </IconButton>
                    </InputAdornment>
                }
            />
        </FormControl>
    );
}
