import { useEffect, useState } from 'react';
import { useDataBase } from '../../common/hooks/hooks';
import { ALBUMS_URL, USERS_URL } from '../../common/constants.js';

export function useAlbums() {
    const { items: albums } = useDataBase(ALBUMS_URL);
    const { items: users } = useDataBase(USERS_URL);
    const [albumsUsers, setAlbumsUsers] = useState([]);

    useEffect(() => {
        const o = filterUsers(albums, users)
        setAlbumsUsers(o);
    }, [albums, users])

    function filterUsers(items, namesUsers) {
        if (items.length === 0 || namesUsers.length === 0) return [];
        const r = items.reduce((r, i) => {
            return ((r[i.userId] || (r[i.userId] = [])).push(i), r)
        }, {});
        return Object.entries(r).map(i => {
            const user = namesUsers.find((el) => el.id === +i[0])
            const o = {
                userId: i[0],
                username: user.username,
                albums: i[1]
            };
            o.albums.forEach(a => {
                delete a.userId;
            });
            return o;
        });
    }
    return { albumsUsers }
}