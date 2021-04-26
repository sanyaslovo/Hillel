import React from 'react';
import { connect } from 'react-redux';
import { addTodoAction , toggleTodoAction, deleteTodoAction } from '../store/actions/actions';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 500,
        backgroundColor: theme.palette.background.paper,
    },
}));

function Todos({ todos = [], dispatch }) {
    const classes = useStyles();
    function addTodo(newTodo) { dispatch(addTodoAction(newTodo)); }
    function toggleTodo(id) { dispatch(toggleTodoAction(id)); }
    function deleteTodo(id) { dispatch(deleteTodoAction(id)); }
    return (
        <div className="todos">
            <Container maxWidth="sm" align="center">
                <div className={classes.root}>
                    <List component="nav">
                        <ListItem>
                            <Typography variant="h5" align="center">
                                My Todos
                            </Typography>
                        </ListItem>
                        <Divider />
                        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
                        <Divider />
                        <ListItem>
                            <TodoForm addTodo={addTodo} />
                        </ListItem>
                    </List>
                </div>
           </Container>
        </div>
    );
}

const mapStateToProps = state => {
    return { todos: state.list };
};

export default connect(mapStateToProps)(Todos);
