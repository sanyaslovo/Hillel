import UserAlbums from './Item/UserAlbums';
import { useAlbums } from './hooks';
import './Albums.css';

export default function Albums() {
    const { albumsUsers } = useAlbums();
    return (
        <section className="albums">
            { albumsUsers.map((el) => <UserAlbums key={ el.userId } user={ el } ></UserAlbums>) }
        </section>
    )
}
