import React, {Component} from 'react';
import { LinearProgress, Container, Typography, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper } from '@material-ui/core';
import RowContacts from "./RowContacts";
import Actions from "./Actions/Actions";
import { getContacts, deleteContact, contactAction } from "../../api/api";

export default class Contacts extends Component {
    state = {
        contacts: [],
    }
    componentDidMount() {
        getContacts().then(contacts => this.setState({ contacts }));
    }
    action = (contact) => {
        if (contact.id === ''){
            contactAction(contact, 'add').then(() => this.setState({contacts: [...this.state.contacts, contact]}));
        } else {
            contactAction(contact, 'edit').then(() => this.setState({ contacts: this.state.contacts.map(item => item.id === contact.id ? contact : item )}));
        }
    }
    delete = (id) => {
        deleteContact(id);
        this.setState({contacts: this.state.contacts.filter(contact => contact.id !== id)});
    };
    render() {
        return (
            <Container maxWidth="sm">
                <Typography style={{marginTop: '18px'}} align="center" variant="h4" paragraph>Phone Book</Typography>
                {this.state.contacts.length === 0 ? (
                    <LinearProgress />
                ) : null
                }
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

                            {this.state.contacts.map(contact => (
                                <RowContacts key={contact.id} contact={contact} action={this.action} delete={this.delete}/>
                            ))}
                            <TableRow>
                                <TableCell>
                                    <Actions
                                        type="add"
                                        contact={{id: '', name: '', surname: '', phone: ''}}
                                        action={this.action}
                                    />
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        );
    }
}