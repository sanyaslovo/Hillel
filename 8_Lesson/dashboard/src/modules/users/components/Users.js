import React from 'react';
import { useUsers } from '../hooks/useUsers';
import UsersList from './UsersList';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {LinearProgress} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    title: {
        padding: theme.spacing(2)
    },
}));

function Users() {
    const { users ,deleteUser } = useUsers();
    const classes = useStyles();
    if (!Object.keys(users).length) return <LinearProgress />
    return (
        <>
            <Typography align="center" variant="h4" className={classes.title}>Users</Typography>
            <UsersList list={users} onDelete={deleteUser}/>
        </>
    );
}

export default Users;
