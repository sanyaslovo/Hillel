import React from 'react';
import { useFormikContext } from 'formik';
import { Button } from '@material-ui/core';

const FormikBtn = ({ children, ...props }) => {
    const { isValid } = useFormikContext();
    return (
        <Button
            {...props}
            disabled={!isValid}
        >
            {children}
        </Button>
    );
}

export default FormikBtn;
