import Axios from 'axios';
import { useState, useEffect } from 'react';
import { URL } from '../constants';

export default function useContacts() {
    const [ list, setList ] = useState([]);
    const [ modal, setModal ] = useState(false);

    useEffect(() => {
        Axios.get(URL).then(({ data }) => setList(data));
    }, []);

    const toggleModal = () => {
        setModal(!modal);
    }

    const deleteContact = (id) => {
        Axios.delete(URL + id);
        setList(list.filter((item) => item.id !== id));
    }
    const createContact = (contact) => {
        Axios.post(URL, contact, {
            headers: {'Content-Type': 'application/json'}
        }).then(({ data }) => setList(() => [...list, contact]));
    }
    return {
        list,
        modal,
        toggleModal,
        createContact,
        deleteContact
    }
}