import React from 'react';
import useNotes from '../../hooks/useNotes';
import { Navbar } from 'react-bootstrap';
import NoteAdd from './NoteAdd';
import NotesGrid from './NotesGrid';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Board() {
    const { notes , createNote, editNote, deleteNote } = useNotes();
    const addItem = () => createNote();
    const deleteItem = (id) => deleteNote(id);
    const editItem = (modifiedNote) => editNote(modifiedNote);
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Notes Board</Navbar.Brand>
                <NoteAdd onAdd={addItem} />
            </Navbar>
            <NotesGrid notes={notes} addNote={addItem} editNote={editItem} deleteNote={deleteItem} />
        </>
    );
}