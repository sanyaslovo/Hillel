import React from 'react';
import useContacts from '../hooks/useContacts';
import ContactsTable from './ContactsTable';
import ContactsAddForm from './AddContact';
import SetTheme from '../../theme/SetTheme'

export default function Contacts() {
    const {
        list,
        modal,
        toggleModal,
        createContact,
        deleteContact
    } = useContacts();
    const deleteItem = (id) => deleteContact(id);
    const createItem = (newItem) => createContact(newItem);
    return (
        <>
            <ContactsTable
                list={list}
                onDelete={deleteItem}
                toggleModal={toggleModal}>
            </ContactsTable>
            <ContactsAddForm
                onSave={createItem}
                isOpened={modal}
                toggleModal={toggleModal}>
            </ContactsAddForm>
            <SetTheme />
        </>
    )
}
