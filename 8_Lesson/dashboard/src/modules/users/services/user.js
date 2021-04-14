import api from "../../../api";
import { USERS_API_URI } from '../constants';

export function getUser(id) {
    return api.get(USERS_API_URI, { params: { id } });
}