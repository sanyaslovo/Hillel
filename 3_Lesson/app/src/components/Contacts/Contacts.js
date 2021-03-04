import React, {Component} from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Add from "./Add/Add";
import Delete from "./Delete/Delete";
import Edit from "./Edit/Edit";

export default class Contacts extends Component {
    state = {
        contacts: [],
    }
    componentDidMount() {
        fetch('https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/contacts')
            .then(res => res.json())
            .then(contacts => this.setState({contacts}))
    }
    createContact = (newContacts) => {
        fetch('https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/contacts', {
            method: 'POST',
            body: JSON.stringify(newContacts),
            headers: {
                'Content-Type': 'application/json',
            },
        }).catch((e) => console.log('Request error', e));
        this.setState({contacts: [...this.state.contacts, newContacts]})
    }
    editContact = (contact) => {
        fetch('https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/contacts/' + contact.id, {
            method: 'PUT',
            body: JSON.stringify(contact),
            headers: {'Content-Type': 'application/json'}
        }).catch((e) => console.log('Request error', e));
        this.setState({contacts: this.state.contacts.map(item => item.id === contact.id ? contact : item )})
    }
    deleteContact = (id) => {
        fetch('https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/contacts/' + id, {method: 'DELETE'})
            .catch((e) => console.log('Request error', e));
        this.setState({contacts: this.state.contacts.filter(contact => contact.id !== id)})
    };
    render() {
        return (
            <Container maxWidth="sm">
                <Typography style={{marginTop: '18px'}} align="center" variant="h4" paragraph>Phone Book</Typography>
                <TableContainer component={Paper}>
                    <Table size="medium" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="left">Surname</TableCell>
                                <TableCell align="left">Telephone number</TableCell>
                                <TableCell align="right">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.contacts.map((contact) => (
                                <TableRow key={contact.id}>
                                    <TableCell component="th" scope="row">
                                        {contact.name}
                                    </TableCell>
                                    <TableCell align="left">{contact.surname}</TableCell>
                                    <TableCell align="left"><a href={`tel:${contact.phone}`}>{contact.phone}</a></TableCell>
                                    <TableCell align="right" style={{padding: '5px' }}>
                                        <Edit edit={this.editContact} contact={contact}/>
                                        <Delete delete={this.deleteContact} id={contact.id}/>
                                    </TableCell>
                                </TableRow>
                            ))}
                            <TableRow>
                                <TableCell>
                                    <Add onAdd={this.createContact} />
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        );
    }
}