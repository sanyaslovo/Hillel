import React  from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import NotesGridItem from './NotesGridItem';

export default function NotesGrid({ notes, edit, del, bg }) {
    return (
        <Container fluid>
            <Row>
                <Col className="board">
                    {
                        notes.map((note, id) => {
                            const randomBg = bg[Math.floor(Math.random() * bg.length)].toLowerCase()
                            return (
                                <NotesGridItem key={id} note={note} edit={edit} bg={randomBg} del={del}/>
                            )
                        })
                    }
                </Col>
            </Row>
        </Container>
    );
}