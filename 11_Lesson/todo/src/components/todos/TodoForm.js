import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { saveTodo } from "../../store/actions/actions";
import { Button, Dialog, DialogContent, Grid, Slide, Typography } from "@material-ui/core";
import { Form, Formik } from 'formik';
import FormikTextField from '../formik/FormikTextField';
import FormikBtn from '../formik/FormikBtn';
import FormikSelect from '../formik/FormikSelect';

const Transition = React.forwardRef((props, ref) =>
    <Slide direction="down" ref={ref} {...props} />);

const TodoForm = ({ todo, modalOpened, toggleModal, saveTodo }) => {
    const history = useHistory();
    const validate = (values) => {
        const errors = {};
        if (!values.title) {
            errors.title = 'Todo is required';
        } else if (values.title.length > 255) {
            errors.title = 'Todo is too long';
        }
        return errors;
    };
    const handleSubmit = (newTodo) => {
        toggleModal(false)
        saveTodo(newTodo);
        history.push('/todo');
    }
    const handleCancel = () => {
        toggleModal(false)
        history.push('/todo');
    }
    return(
        <Dialog
            open={modalOpened}
            TransitionComponent={Transition}
            keepMounted
            onClose={toggleModal}
        >
            <DialogContent>
                <Typography variant="h5" align="center">New Todo</Typography>
                <Formik
                    initialValues={todo}
                    enableReinitialize
                    validate={validate}
                    onSubmit={handleSubmit}
                >
                    <Form>
                       <Grid container>
                           <Grid item xs={12} style={{margin: '20px 0'}}>
                               <FormikTextField
                                   name="title"
                                   label="todo"
                                   fullWidth
                               />
                           </Grid>
                           <Grid item xs={12} style={{margin: '20px 0'}}>
                               <FormikSelect
                                   name="isDone"
                                   label="isDone"
                                   fullWidth
                               />
                           </Grid>
                       </Grid>
                        <Grid
                            container
                            direction="row"
                            justify="space-between"
                            alignItems="center"
                        >
                            <Button
                                type="submit"
                                color="primary"
                                onClick={handleCancel}
                            >
                                Cancel
                            </Button>
                            <FormikBtn
                                type="submit"
                                variant="contained"
                                color="primary"
                            >
                                Submit
                            </FormikBtn>
                        </Grid>
                    </Form>
                </Formik>
            </DialogContent>
        </Dialog>
    );
}
const mapStateToProps = () => {
    const todo = {
        title: '',
        isDone: false
    };
    return { todo }
};
const mapDispatchToProps = {
    saveTodo,
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
