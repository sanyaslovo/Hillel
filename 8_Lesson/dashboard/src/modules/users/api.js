import axios from 'axios';
import { USERS_API_URI } from './constants';

export default axios.create({
    baseURL: USERS_API_URI,
    headers: {'Content-Type': 'application/json'},
});
