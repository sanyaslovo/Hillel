import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: '#fff',
    },
}));

export default function Header() {
    const classes = useStyles();
    const history = useHistory();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Button className={classes.menuButton} onClick={() => history.push('/users')}>Users</Button>
                    <Button className={classes.menuButton} onClick={() => history.push('/addUser')}>Add User</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}
