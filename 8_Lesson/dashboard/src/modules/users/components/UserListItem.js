import React from 'react';
import { useHistory } from 'react-router-dom';
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import {IconButton} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

function UserListItem({ item, onDelete }) {
    const history = useHistory();
    return (
        <TableRow>
            <TableCell component="th" scope="row">{item.name}</TableCell>
            <TableCell>{item.phone}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.website}</TableCell>
            <TableCell align="right">
                <IconButton aria-label="edit" onClick={() => history.push('/users/' + item.id)}>
                    <EditIcon color="primary" />
                </IconButton>
                <IconButton aria-label="delete" onClick={() => onDelete(item.id)}>
                    <DeleteIcon />
                </IconButton>
            </TableCell>
        </TableRow>
    );
}

export default UserListItem;
