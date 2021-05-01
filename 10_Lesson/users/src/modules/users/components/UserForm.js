import React, { useState } from 'react'
import { connect } from 'react-redux';
import { saveUser } from '../../../store/actions/actions'
import { useRouteMatch, useHistory } from 'react-router-dom';
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

function Form({ saveUser }) {
    const classes = useStyles();
    const history = useHistory();
    const [ userObj, setUserObj ] = useState({
        id: '',
        name: '',
        phone: '',
        email: '',
    })
console.log(saveUser)
    const onInputChange = (e) => {
    };
    const submitForm = (e) => {
        e.preventDefault();
    };
    return (
        <Container maxWidth="sm">
            <form className={classes.form} noValidate autoComplete="off">
                <TextField
                    className={classes.root}
                    fullWidth
                    label="Name"
                    name="name"
                    variant="outlined"
                    defaultValue={userObj.name}
                    onChange={onInputChange}
                />
                <TextField
                    className={classes.root}
                    fullWidth
                    label="Phone"
                    name="phone"
                    variant="outlined"
                    type="tel"
                    defaultValue={userObj.phone}
                    onChange={onInputChange}
                />
                <TextField
                    className={classes.root}
                    fullWidth
                    label="Email"
                    name="email"
                    variant="outlined"
                    type="email"
                    defaultValue={userObj.email}
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
export default connect(mapStateToProps, { saveUser })(Form)
