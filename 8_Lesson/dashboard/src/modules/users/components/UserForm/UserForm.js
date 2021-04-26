import React, { useState } from 'react'
import { useRouteMatch, useHistory } from 'react-router-dom';
import { useUser } from '../../hooks/useUser';
import { useUsers } from '../../hooks/useUsers';
import { makeStyles } from '@material-ui/core/styles';
import { Container, TextField, Button, LinearProgress } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    form: {
        margin: theme.spacing(2),

    },
    between: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        margin: theme.spacing(1),
    },
    button: {
        textDecoration: "none",

    }
}));

export default function Form() {
    const classes = useStyles();
    const history = useHistory();
    const match = useRouteMatch();
    const { addUser, editUser } = useUsers();
    const { user } = useUser(match.params.id);
    const [currentUser, setCurrentUser] = useState(user);
    const isAdd = () => {
        return Object.keys(user).length === 1 ? false : true
    }
    const onInputChange = (e) => {
        isAdd()
        ? (setCurrentUser({ ...currentUser, [e.target.name]: e.target.value }))
        : (setCurrentUser({ ...currentUser, id: user[0].id, [e.target.name]: e.target.value }))
    };
    const submitForm = (e) => {
        if(!Object.keys(currentUser).length) return
        e.preventDefault();
        isAdd() ? (addUser(currentUser)) : (editUser(currentUser))
        setTimeout(() => {history.push('/users')}, 1000);
    };
    if (!Object.keys(user).length) return <LinearProgress />
    return (
        <Container maxWidth="sm">
            <form className={classes.form} noValidate autoComplete="off">
                <TextField
                    className={classes.root}
                    fullWidth
                    label="Name"
                    name="name"
                    variant="outlined"
                    defaultValue={isAdd() ? '' : user[0].name}
                    onChange={onInputChange}
                />
                <TextField
                    className={classes.root}
                    fullWidth
                    label="Phone"
                    name="phone"
                    variant="outlined"
                    type="tel"
                    defaultValue={isAdd() ? '' : user[0].phone}
                    onChange={onInputChange}
                />
                <TextField
                    className={classes.root}
                    fullWidth
                    label="Email"
                    name="email"
                    variant="outlined"
                    type="email"
                    defaultValue={isAdd() ? '' : user[0].email}
                    onChange={onInputChange}
                />
                <div className={classes.between}>
                    <Button variant="contained" color="secondary" onClick={() => history.push('/users')}>
                        Cancel
                    </Button>
                    <Button variant="contained" color="primary" onClick={submitForm}>
                        Save
                    </Button>
                </div>
            </form>
        </Container>
    )
}
