import React, {Component} from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

class Delete extends Component {
    deleteContact = () => this.props.delete(this.props.id)
    render() {
        return (
            <IconButton style={{padding: '5px' }} aria-label="delete" color="primary" onClick={this.deleteContact}>
                <DeleteIcon />
            </IconButton>
        );
    }
}

export default Delete;