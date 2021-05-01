import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { deleteUser, setUsers } from '../../../store/actions/actions'
import UsersList from './UsersList';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {LinearProgress} from "@material-ui/core";
import Axios from "axios";
import { USERS_API_URI } from "../constants";

const useStyles = makeStyles((theme) => ({
    title: {
        padding: theme.spacing(2)
    },
}));

function Users({ users = [], deleteUser, setUsers }) {
    const classes = useStyles();

    useEffect (() => {
        Axios.get(USERS_API_URI).then(({data}) => setUsers(data));
    }, [setUsers]);

    if (!Object.keys(users).length) return <LinearProgress />
    return (
        <>
            <Typography align="center" variant="h4" className={classes.title}>Users</Typography>
            <UsersList
                users={users}
                deleteUser={deleteUser}
            />
        </>
    );
}

const mapStateToProps = (state) => {
    return { users: state.users };
}

const mapDispatchToProps = {
    deleteUser,
    setUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
