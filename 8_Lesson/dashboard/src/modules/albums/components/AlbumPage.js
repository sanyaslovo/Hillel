import React from 'react';
import { useParams } from 'react-router-dom';
import { useAlbum } from '../hooks/useAlbum';
import {Container, Grid, LinearProgress} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    margin: {
        marginTop: theme.spacing(3),
    },
}));

function AlbumPage() {
    const classes = useStyles();
    const { albumId } = useParams();
    const { photos } = useAlbum(albumId);
    if (!Object.keys(photos).length) return <LinearProgress />
    return (
        <Container maxWidth="xl" >
            <Grid container className={classes.margin}>
                {photos.map((photo) => (
                    <Grid item key={photo.id} xs={6} md={1}>
                        <img src={photo.thumbnailUrl} alt={photo.title} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default AlbumPage;
