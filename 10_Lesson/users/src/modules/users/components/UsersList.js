import React from 'react';
import UserListItem from './UserListItem';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Paper from '@material-ui/core/Paper';
import {IconButton, Container} from "@material-ui/core";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function UsersList({ users, deleteUser }) {
    const classes = useStyles();
    return (
        <Container maxWidth="xl">
            <TableContainer component={Paper}>
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Surname</TableCell>
                            <TableCell>Phone</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => (
                            <UserListItem key={user.id} item={user} deleteUser={deleteUser} />
                        ))}
                        <TableRow align="right">
                            <TableCell colSpan={5} align="right">
                                <Link to="/addUser">
                                <IconButton>
                                    <AddCircleIcon color="primary" />
                                </IconButton>
                                </Link>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}

export default UsersList;
