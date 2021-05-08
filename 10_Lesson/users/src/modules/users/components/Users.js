import React from 'react';
import { connect } from 'react-redux';
import { deleteUser } from '../../../store/actions/actions'
import UsersList from './UsersList';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {LinearProgress} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    title: {
        padding: theme.spacing(2)
    },
}));

function Users({ users = [], deleteUser }) {
    const classes = useStyles();
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
    deleteUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
