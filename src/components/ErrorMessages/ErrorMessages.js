import React from 'react';
import { ErrorMessage } from "formik";

const FormikErrorMessage = (props) => {
    const name = props.name || "";
    const nameOfClass = props.nameOfClass || "";
    const color = props.color || "";
    const fontWeight = props.fontWeight || "";

    return(
        <ErrorMessage
            name={name}
            component="div"
            className={nameOfClass}
            style={{ 
                color: {color}, 
                fontWeight: {fontWeight} 
            }}
        />
    )
}

export default FormikErrorMessage;