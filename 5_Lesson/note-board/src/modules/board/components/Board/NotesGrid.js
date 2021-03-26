import React  from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import NotesGridItem from './NotesGridItem';

export default function NotesGrid({ notes, editNote, deleteNote }) {
    return (
        <Container fluid>
            <Row>
                <Col className="board">
                    {
                        notes.map((note, id) => {
                            return (
                                <NotesGridItem key={id} note={note} editNote={editNote} deleteNote={deleteNote}/>
                            )
                        })
                    }
                </Col>
            </Row>
        </Container>
    );
}