export const getContacts = () => fetch('https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/contacts').then((res) => res.json())
export const deleteContact = (id) => {
    return fetch('https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/contacts/' + id, {method: 'DELETE'})
}
export const contactAction = (contact, action) => {
    if (action === 'add') {
        return fetch('https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/contacts', {
            method: 'POST',
            body: JSON.stringify(contact),
            headers: {'Content-Type': 'application/json'},
        });
    } else if (action === 'edit') {
        return fetch('https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/contacts/' + contact.id, {
            method: 'PUT',
            body: JSON.stringify(contact),
            headers: {'Content-Type': 'application/json'}
        });
    }
}