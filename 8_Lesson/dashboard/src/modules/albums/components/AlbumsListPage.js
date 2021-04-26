import React from 'react';
import useAlbums from '../hooks/useAlbums';
import AlbumsList from './AlbumsList';
import { Typography, LinearProgress } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

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
