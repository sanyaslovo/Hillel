import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo, toggleTodo } from '../../store/actions/actions';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import TodoList from './TodoList';
import {Button, LinearProgress, Paper} from '@material-ui/core';
import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 700,
        backgroundColor: theme.palette.background.paper,
    },
    btn: {
        margin: '10px 0',
    }
}));

const Todos = ({
       todos = [],
       toggleTodo,
       deleteTodo,
       toggleModal
}) => {
    const classes = useStyles();
    if (!Object.keys(todos).length) return <LinearProgress />
    return (
        <div className="todos">
            <Container maxWidth="xl" align="center">
                <Paper className={classes.root} elevation={6}>
                    <List component="nav">
                        <ListItem>
                            <Typography variant="h5" align="center">
                                My Todos
                            </Typography>
                        </ListItem>
                        <Divider />
                        <TodoList
                            todos={todos}
                            toggleTodo={toggleTodo}
                            deleteTodo={deleteTodo}
                        />
                        <Divider />
                        <Button
                            className={classes.btn}
                            color="primary"
                            variant="contained"
                            startIcon={<AddIcon />}
                            component={Link}
                            to="/todo/add"
                            onClick={() => toggleModal(true)}
                        >
                            Add todo
                        </Button>
                    </List>
                </Paper>
           </Container>
        </div>
    );
}

const mapStateToProps = state => {
    return { todos: state.todos };
};

const mapDispatchToProps = {
    toggleTodo,
    deleteTodo
}
export default connect(mapStateToProps, mapDispatchToProps)(Todos);
