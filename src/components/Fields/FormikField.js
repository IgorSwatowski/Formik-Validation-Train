import React from 'react';
import { Field } from "formik";


const FormikField = (props) => {
    const name = props.name || "Jan";
    const placeholder = props.placeholder || ""

    return(
        <Field 
            name={name} 
            type="text" 
            placeholder={placeholder}
        />
    )
}

export default FormikField;