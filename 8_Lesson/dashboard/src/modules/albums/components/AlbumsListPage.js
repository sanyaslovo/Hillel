import React from 'react';
import useAlbums from '../hooks/useAlbums';
import AlbumsList from './AlbumsList';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import {LinearProgress} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    title: {
        padding: theme.spacing(2)
    },
}));

function AlbumsListPage() {
    const classes = useStyles();
    const { albums } = useAlbums();
    if (!Object.keys(albums).length) return <LinearProgress />
    return (
        <>
            <Typography align="center" variant="h4" className={classes.title}>Albums</Typography>
            <AlbumsList list={albums} />
        </>
    );
}

export default AlbumsListPage;
