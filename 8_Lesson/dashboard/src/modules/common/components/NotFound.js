import { Link } from 'react-router-dom';
import {Typography} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(10),
        },
    },
    btn: {
        color: "#fff",
        textDecoration: "none",
    },
    margin: {
        margin: theme.spacing(1),
    }
}));

export default function NotFound() {
    const classes = useStyles();
    return (
        <Container maxWidth="xl" className={classes.root}>
            <Typography align="center">
                <img width="300px" src="https://reoton.com.ua/images/404_animation.gif" alt="not found"/>
                <h1>404 Not Found</h1>
                <p>Page not found, Please visit homepage</p>
                <Button className={classes.margin} variant="contained" color="primary"><Link className={classes.btn} to="/dashboard">Homepage</Link></Button>
            </Typography>
        </Container>
    )
}