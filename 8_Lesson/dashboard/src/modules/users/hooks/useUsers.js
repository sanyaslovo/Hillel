import { useEffect, useState } from "react";
import Axios from 'axios';
import { USERS_API_URI } from '../constants';

export function useUsers() {
    const [users, setUsers] = useState([]);
    useEffect (() => {
        Axios.get(USERS_API_URI).then(({data}) => setUsers(data));
    }, []);
    function addUser(data) {
        Axios.post(USERS_API_URI, {
            name: data.name,
            phone: data.phone,
            email: data.email,
        }, {
            headers: {'Content-Type': 'application/json'}
        }).then(({data}) => setUsers((users) => {return [...users, data]}));
    };
    function deleteUser(id) {
        Axios.delete(USERS_API_URI + id);
        setUsers(users.filter(item => item.id !== id));
    };
    function editUser(data) {
        Axios.put(USERS_API_URI + data.id, {
            id: data.id,
            name: data.name,
            phone: data.phone,
            email: data.email,
        }, {
            headers: {'Content-Type': 'application/json'}
        }).then(({data}) => {
            console.log(data)
            setUsers(users.map((item) => item.id === data.id ? data : item))
        });
    };
    return {
        users,
        setUsers,
        addUser,
        deleteUser,
        editUser,
    }
}