import { Container } from '@material-ui/core';
import AlbumsListItem from './AlbumsListItem';
import Grid from '@material-ui/core/Grid';


function AlbumsList({ list }) {
    return (
        <Container maxWidth="xl">
            <Grid container spacing={1}>
                {list.map((album) => (
                    <AlbumsListItem key={album.id} item={album} />
                ))}
            </Grid>
        </Container>
    );
}

export default AlbumsList;
