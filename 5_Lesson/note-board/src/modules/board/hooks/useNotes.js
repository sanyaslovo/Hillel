import { useState, useEffect } from 'react';
import { URL } from '../../constants';
const EMPTY_NOTE = { description: '' };

export default function useNotes() {
    const [notes, setNotes] = useState([]);
    useEffect(() => {
        fetch(URL).then((res) => res.json()).then(( res ) => setNotes(res));
    }, []);
    function createNote() {
        fetch(URL + '/', {
            method: 'POST',
            body: JSON.stringify(EMPTY_NOTE),
            headers: {'Content-Type': 'application/json'},
        })
        .then((res) => res.json())
        .then((res) => setNotes(() => [ ...notes, res ]));
    }
    function deleteNote(id) {
        fetch(URL + '/' + id, {method: 'DELETE'}).then((res) => res.json());
        setNotes(notes.filter((item) => item.id !== id));
    }
    function editNote(note) {
        fetch(URL + '/' + note.id, {
            method: 'PUT',
            body: JSON.stringify(note),
            headers: {'Content-Type': 'application/json'},
        }).then((res) => res.json());
    }
    return {
        notes,
        createNote,
        editNote,
        deleteNote,
    };
}