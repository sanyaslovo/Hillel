import { useEffect, useState } from 'react';
import { getAlbumPhotos } from '../services/photos';

export function useAlbum(albumId) {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        getAlbumPhotos(albumId).then(({ data }) => setPhotos(data));
    }, []);

    return { photos };
}
