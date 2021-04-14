import { useEffect, useState } from 'react';
import { getAlbumsList } from '../services/albums';

export default function useAlbums() {
    const [albums, setAlbums] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        setError(null);
        getAlbumsList()
            .then(({ data }) => setAlbums(data))
            .catch((err) => setError(err))
            .finally(() => setIsLoading(false));
    }, []);

    return { albums, isLoading, error };
}
