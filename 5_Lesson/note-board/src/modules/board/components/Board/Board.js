import React, { useState, useEffect } from 'react';
import { getNotes, createNote, editNote, deleteNote } from '../../services/boardServices';
import { Navbar } from "react-bootstrap";
import NoteAdd from "./NoteAdd";
import NotesGrid from "./NotesGrid";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Board() {
    const [notes, setNotes] = useState([]);
    const backgrounds = [ 'Primary', 'Secondary', 'Success', 'Danger', 'Warning', 'Info', 'Light', 'Dark' ];
    useEffect(() => {
        getNotes().then((notes) => setNotes(notes.reverse()));
    }, []);
    const deleteItem = (id) => {
        deleteNote(id).catch((e) => console.log(e));
        setNotes(notes.filter((note) => note.id !== id));
    }
    const addItem = () => {
        const note = {id: "", description: ""};
        createNote(note).then((note) => {setNotes([...notes, note])});
    }
    const editItem = (modifiedNote) => {
        editNote(modifiedNote).then(() => {
            setNotes(notes.map((note) => note.id !== modifiedNote.id ? note : modifiedNote));
        });
    }
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    Notes Board
                </Navbar.Brand>
                <NoteAdd onAdd={addItem} />
            </Navbar>
            <NotesGrid notes={notes} add={addItem} edit={editItem} del={deleteItem} bg={backgrounds} />
        </>
    );
}