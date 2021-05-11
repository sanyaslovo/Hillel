import React, { useState } from 'react'
import { connect } from 'react-redux';
import { saveUser } from '../../../store/actions/actions'
import { useHistory, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {Container, TextField, Button, LinearProgress} from '@material-ui/core';

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

function Form({ users, saveUser }) {
    const classes = useStyles();
    const history = useHistory();
    const { id } = useParams();
    const userEditingData = users.find(user => user.id === id);
    const [ userData, setUserData ] = useState(userEditingData || {
        name: '',
        surname: '',
        phone: '',
    });
    const onInputChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };
    const submitForm = (e) => {
        e.preventDefault();
        saveUser(userData);
        history.push('/users');
    };
    if (!Object.keys(users).length) return <LinearProgress />;
    return (
        <Container maxWidth="sm">
            <form className={classes.form} noValidate autoComplete="off">
                <TextField
                    className={classes.root}
                    fullWidth
                    label="Name"
                    name="name"
                    variant="outlined"
                    defaultValue={userData.name}
                    onChange={onInputChange}
                />
                <TextField
                    className={classes.root}
                    fullWidth
                    label="Surname"
                    name="surname"
                    variant="outlined"
                    type="tel"
                    defaultValue={userData.surname}
                    onChange={onInputChange}
                />
                <TextField
                    className={classes.root}
                    fullWidth
                    label="Phone"
                    name="phone"
                    variant="outlined"
                    type="tel"
                    defaultValue={userData.phone}
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
const mapStateToProps = (state) => {
    return { users: state.users };
}

const mapDispatchToProps = {
    saveUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
