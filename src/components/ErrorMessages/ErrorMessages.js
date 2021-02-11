import React from 'react';

// Components =======================
import { StyledErrorMessage } from './errorMessagesStyles';

const FormikErrorMessage = (props) => {
    const name = props.name || "";
    const nameOfClass = props.nameOfClass || "";
    const color = props.color || "";
    const fontWeight = props.fontWeight || "";

    return(
        <StyledErrorMessage
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