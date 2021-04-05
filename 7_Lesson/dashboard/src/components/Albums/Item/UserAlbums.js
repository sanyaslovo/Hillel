import ItemAlbums from './ItemAlbums';

export default function UserAlbums({ user }) {
    return (
        <div className="albums-card">
            <p className="albums-header">
                <span>Creating by:</span> { user.username }
            </p>
            <div className="albums-gallery">
                { user.albums.map(el => <ItemAlbums key={ el.id } album={ el }></ItemAlbums>) }
            </div>
        </div>
    )
}
