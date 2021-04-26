import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

function NotesGridItem({ note, editNote, deleteNote }) {
    const [ description, setDescription ] = useState(note.description)
    const onBlur = (e) => {
        if (e.currentTarget === e.target) {
            const modifiedNote = {
                id: note.id,
                description: description,
            }
            editNote(modifiedNote)
        }
    }
    const onChange = (e) => {
        setDescription(e.target.value)
    }
    return (
        <Card className="mb-2 bg-dark">
            <Card.Header>
                <div className="closeBtn" onClick={() => deleteNote(note.id)}>×</div>
            </Card.Header>
            <Card.Body>
                <textarea
                    name="description"
                    id={note.id}
                    className={'text-white text-center'}
                    defaultValue={note.description}
                    onBlur={(e) => onBlur(e)}
                    onChange={(e) => onChange(e)}
                />
            </Card.Body>
        </Card>
    );
}

export default NotesGridItem;
