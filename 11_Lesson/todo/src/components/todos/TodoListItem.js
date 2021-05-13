import ListItemText from '@material-ui/core/ListItemText';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    between: {
        display: 'flex',
        justifyContent: 'space-between',
    }
}));

const TodoListItem = ({ todo, deleteTodo }) => {
    const classes = useStyles();
    const onDeleteBtnClick = (e) => {
        e.stopPropagation();
        deleteTodo(todo.id);
    }
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
export default TodoListItem;
