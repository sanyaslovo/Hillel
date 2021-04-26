import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, ButtonGroup, Button } from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    title: {
        padding: theme.spacing(2)
    },
    link: {
        color: '#fff',
        textDecoration: "none",
    }
}));

function Dashboard() {
    const classes = useStyles();
    return (
        <Container maxWidth="xl">
            <Typography align="center" variant="h4" className={classes.title}>Dashboard</Typography>
            <ButtonGroup disableElevation variant="contained" color="primary">
                <Button><Link to="/users" className={classes.link}>Users</Link></Button>
                <Button><Link to="/albums" className={classes.link}>Albums</Link></Button>
            </ButtonGroup>
        </Container>
    );
}

export default Dashboard;
