import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from "@material-ui/icons/Add";

export default class Actions extends Component {
    state = {
        isOpen: false,
        form: {
            id: this.props.contact.id,
            name: this.props.contact.name,
            surname: this.props.contact.surname,
            phone: this.props.contact.phone
        }
    }
    handleClickOpen = () => {
        this.setState({ isOpen: true });
    };
    handleClose = () => {
        this.setState({ isOpen: false });
    };
    onFormSubmit = (e) => {
        e.preventDefault();
            this.props.action(this.state.form)
            this.setState({ ...this.state.form, isOpen: false });
    }
    render() {
        return (
            <>
                {this.props.type === 'add' ? (
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        startIcon={<AddIcon />}
                        onClick={this.handleClickOpen}
                    >
                        Add
                    </Button>
                ) : (
                    <IconButton style={{padding: '5px' }} aria-label="Edit" color="primary" onClick={this.handleClickOpen}>
                        <EditIcon />
                    </IconButton>
                )}
                <Dialog open={this.state.isOpen} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add new contact to Phone book</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="edit-name"
                        label="Name"
                        type="text"
                        fullWidth
                        defaultValue={this.props.contact.name}
                        onChange={e => this.setState({ ...this.state, form: {...this.state.form, name: e.target.value}})}
                    />
                    <TextField
                        margin="dense"
                        id="edit-surname"
                        label="Surname"
                        type="text"
                        fullWidth
                        defaultValue={this.props.contact.surname}
                        onChange={e => this.setState({ ...this.state, form: {...this.state.form, surname: e.target.value}})}
                    />
                    <TextField
                        margin="dense"
                        id="edit-phone"
                        label="Phone"
                        type="text"
                        fullWidth
                        defaultValue={this.props.contact.phone}
                        onChange={e => this.setState({ ...this.state, form: {...this.state.form, phone: e.target.value}})}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={this.onFormSubmit} color="primary">
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
            </>
        );
    }
}