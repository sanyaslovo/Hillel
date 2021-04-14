import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    btn: {
        color: '#fff',
        textDecoration: 'none',
    },
}));

export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Button className={classes.menuButton}><NavLink className={classes.btn} activeClassName="active" to="/dashboard">Dashboard</NavLink></Button>
                    <Button className={classes.menuButton}><NavLink className={classes.btn} activeClassName="active" to="/users">Users</NavLink></Button>
                    <Button className={classes.menuButton}><NavLink className={classes.btn} activeClassName="active" to="/albums" color="inherit">Albums</NavLink></Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}
