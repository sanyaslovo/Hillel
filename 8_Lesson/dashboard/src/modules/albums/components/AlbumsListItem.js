import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useRouteMatch } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        minHeight: "90px",
    },
    link: {
        color: "black",
        textDecoration: "none",
    }
}));

function AlbumsListItem({ item }) {
    const classes = useStyles();
    const { url } = useRouteMatch();
    return (
        <Grid item xs={1}>
            <Link to={url + '/' + item.id} className={classes.link}><Paper className={classes.paper}>{item.title}</Paper></Link>
        </Grid>
    );
}
export default AlbumsListItem;
