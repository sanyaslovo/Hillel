export const ACTION_SAVE_USER = 'ACTION_SAVE_USER';
export const ACTION_DELETE_USER = 'ACTION_DELETE_USER';
export const ACTION_SET_USER = 'ACTION_SET_USER';

export function saveUser(payload) {
    return { type: ACTION_SAVE_USER, payload };
}
export function deleteUser(payload) {
    return { type: ACTION_DELETE_USER, payload };
}
export function setUsers(payload) {
    return { type: ACTION_SET_USER, payload };
}
