import { URL } from '../constants'

export function getContacts() {
    return fetch(URL).then((res) => res.json());
}

export function createContact(newItem) {
    return fetch(URL, {
        method: 'POST',
        body: JSON.stringify(newItem),
        headers: {
            'Content-Type': 'application/json'
        },
    })
}

export function deleteContact(id) {
    return fetch(URL + id, {
        method: 'DELETE',
    })
}