import Axios from "axios";
import { USERS_API_URI } from "../../modules/users/constants";

export const ACTION_NEW_USER = 'ACTION_NEW_USER';
export const ACTION_EDIT_USER = 'ACTION_EDIT_USER';
export const ACTION_DELETE_USER = 'ACTION_DELETE_USER';
export const ACTION_SET_USERS = 'ACTION_SET_USERS';

export const fetchUsers = () => {
    return (dispatch) => {
        Axios.get(USERS_API_URI).then(({data}) => {
            dispatch({
                type: ACTION_SET_USERS,
                payload: data
            })
        });
    }
};

export const deleteUser = (id) => {
    return (dispatch) => {
        Axios.delete(USERS_API_URI + id);
        dispatch({
            type: ACTION_DELETE_USER,
            payload: id
        });
    }
};

export const saveUser = (user) => {
    return (dispatch) => {
        if(user.id) {
            Axios.put(USERS_API_URI + user.id, user ).then(({ data }) => {
                dispatch({
                    type: ACTION_EDIT_USER,
                    payload: data
                });
            })
        } else {
            Axios.post(USERS_API_URI, user ).then(({data}) => {
                dispatch({
                    type: ACTION_NEW_USER,
                    payload: data
                });
            });
        }
    }
};

export const setUsers = (payload) => ({ type: ACTION_SET_USERS, payload });
