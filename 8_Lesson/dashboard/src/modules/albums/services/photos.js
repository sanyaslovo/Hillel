import api from '../../../api';
import { PHOTOS_API_URI } from '../constants';

export function getAlbumPhotos(albumId) {
    return api.get(PHOTOS_API_URI, { params: { albumId } });
}
