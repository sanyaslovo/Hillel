import { NOTES_URL } from '../../constants';

export function getNotes() {
    return fetch(NOTES_URL).then((res) => res.json());
}
export function deleteNote(id) {
    return fetch(NOTES_URL + '/' + id, {method: 'DELETE'}).then((res) => res.json());
}
export function editNote(newItem) {
    return fetch(NOTES_URL + '/' + newItem.id, {
        method: 'PUT',
        body: JSON.stringify(newItem),
        headers: {'Content-Type': 'application/json'},
    }).then((res) => res.json());
}
export function createNote(newItem) {
    return fetch(NOTES_URL+'/', {
        method: 'POST',
        body: JSON.stringify(newItem),
        headers: {'Content-Type': 'application/json'},
    }).then((res) => res.json());
}