import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';


export default class Add extends Component {
    state = {
        isOpen: false,
        form: {
            name: '',
            surname: '',
            phone: ''
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
        this.props.onAdd(this.state.form)
        this.setState({ ...this.state.form, isOpen: false });
    }
    render() {
        return (
            <div>
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    startIcon={<AddIcon />}
                    onClick={this.handleClickOpen}
                >
                    Add
                </Button>
                <Dialog open={this.state.isOpen} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Add new contact to Phone book</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Name"
                            type="text"
                            fullWidth
                            onChange={e => this.setState({ ...this.state, form: {...this.state.form, name: e.target.value}})}
                        />
                        <TextField
                            margin="dense"
                            id="surname"
                            label="Surname"
                            type="text"
                            fullWidth
                            onChange={e => this.setState({ ...this.state, form: {...this.state.form, surname: e.target.value}})}
                        />
                        <TextField
                            margin="dense"
                            id="phone"
                            label="Phone"
                            type="text"
                            fullWidth
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
            </div>
        );
    }
}