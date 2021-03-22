import React, { useState } from 'react';
import { Card } from "react-bootstrap";

function NotesGridItem({ note, bg, edit, del }) {
    const [ description, setDescription ] = useState(note.description)
    const onBlur = (e) => {
        if (e.currentTarget === e.target) {
            const modifiedNote = {
                id: note.id,
                description: description,
            }
            edit(modifiedNote)
        }
    }
    const onChange = (e) => {
        setDescription(e.target.value)
    }
    return (
        <Card bg={bg} className="mb-2" >
            <Card.Header>
                <div className="closeBtn" onClick={() => del(note.id)}>×</div>
            </Card.Header>
            <Card.Body>
                <textarea
                    name="description"
                    id={note.id}
                    className={bg === 'light' ? 'text-dark text-center' : 'text-white text-center'}
                    defaultValue={note.description}
                    onBlur={(e) => onBlur(e)}
                    onChange={(e) => onChange(e)}
                />
            </Card.Body>
        </Card>
    );
}

export default NotesGridItem;
