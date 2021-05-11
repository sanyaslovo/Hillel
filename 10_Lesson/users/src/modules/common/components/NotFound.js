import { Link } from 'react-router-dom';
import {Typography, Container, Button, Box} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import React from 'react';


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
            <Box align="center">
                <img width="300px" src="https://reoton.com.ua/images/404_animation.gif" alt="not found"/>
                <Typography align="center" variant="h4">404 Not Found</Typography>
                <Typography align="center" variant="caption">Page not found, Please visit homepage</Typography>
                <br/>
                <Button className={classes.margin} variant="contained" color="primary"><Link className={classes.btn} to="/dashboard">Homepage</Link></Button>
            </Box>
        </Container>
    )
}
