import api from '../../../api';
import { ALBUMS_API_URI } from '../constants';

export function getAlbumsList() {
    return api.get(ALBUMS_API_URI);
}
