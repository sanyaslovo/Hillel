import React from 'react';
import { useHistory } from 'react-router-dom';
import { TableCell, TableRow, IconButton } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';

function UserListItem({ item, deleteUser }) {
    const history = useHistory();
    function deleteUserA(e) {
        e.stopPropagation();
        deleteUser(item.id)
    }
    return (
        <TableRow hover style={{ cursor: 'pointer'}} onClick={() => history.push('/users/' + item.id)}>
            <TableCell component="th" scope="row">{item.name}</TableCell>
            <TableCell>{item.phone}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell align="right">
                <IconButton aria-label="delete" onClick={(e) => deleteUserA(e)}>
                    <DeleteIcon />
                </IconButton>
            </TableCell>
        </TableRow>
    );
}

export default UserListItem;
