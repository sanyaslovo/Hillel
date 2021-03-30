import React, { useContext } from 'react';
import useContacts from '../hooks/useContacts';
import ContactsTable from './ContactsTable';
import ContactsAddForm from './AddContact';
import { themeContext } from '../../../themes/themeContext';

export default function Contacts({ theme }) {
    const {
        list,
        modal,
        toggleModal,
        createContact,
        deleteContact
    } = useContacts();
    const { handleChange } = useContext(themeContext);
    const deleteItem = (id) => deleteContact(id);
    const createItem = (newItem) => createContact(newItem);
    return (
        <div className={`wrapper ${theme}`}>
            <button className='toggle_theme' onClick={handleChange}>Toggle theme</button>
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
        </div>
    )
}
