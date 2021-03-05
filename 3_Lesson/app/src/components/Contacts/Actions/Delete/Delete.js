import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

export default class Delete extends Component {
    render() {
        return (
            <IconButton style={{padding: '5px' }} aria-label="delete" color="primary" onClick={() => {this.props.delete(this.props.id)}}>
                <DeleteIcon />
            </IconButton>
        );
    }
}