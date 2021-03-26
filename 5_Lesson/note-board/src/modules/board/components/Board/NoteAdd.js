import React from 'react';
import {Button} from 'react-bootstrap';

export default function NoteAdd({ onAdd }) {
    return (
        <Button className='add' variant="success" onClick={onAdd}>Add note</Button>
    )
}