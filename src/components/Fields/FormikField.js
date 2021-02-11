import React from 'react';


import { StyledField } from './formikFieldStyles';


const FormikField = (props) => {
    const name = props.name || "Jan";
    const placeholder = props.placeholder || ""

    return(
        <StyledField 
            name={name} 
            type="text" 
            placeholder={placeholder}
        />
    )
}

export default FormikField;