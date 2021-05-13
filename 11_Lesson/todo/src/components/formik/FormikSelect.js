import React from 'react';
import { useFormikContext } from 'formik';
import { MenuItem, Select } from '@material-ui/core';

const FormikSelect = props => {
    const { values, handleChange, handleBlur } = useFormikContext();
    const { name } = props;
    return (
        <Select
            label="isDone"
            value={values[name]}
            onChange={handleChange}
            onBlur={handleBlur}
            {...props}
        >
            <MenuItem selected value={false}>Undone</MenuItem>
            <MenuItem value={true}>Done</MenuItem>
        </Select>
    )
}

export default FormikSelect;
