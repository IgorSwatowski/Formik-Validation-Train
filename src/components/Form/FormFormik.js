import React from 'react';

// Components =======================
import FormikField from '../../components/Fields/FormikField';
import FormikErrorMessage from '../../components/ErrorMessages/ErrorMessages';
import { StyledForm, StyledButton } from './formFormikStyles';

const FormFormik = () =>{

    return(
        <StyledForm>
            <FormikField 
                name="firstName"
                placeholder="First Name"
            />
            <FormikErrorMessage 
                name="email"
                classOfName="invalid-feedback"
                color="red"
                fontWeight="bold"
            />
            <FormikField 
                name="lastName"
                placeholder="Last Name"
            />
            <FormikErrorMessage 
                name="lastName"
                classOfName="invalid-feedback"
                color="red"
                fontWeight="bold"
            />
            <FormikField 
                name="email"
                placeholder="Email"
            />
            <FormikErrorMessage 
                name="email"
                classOfName="invalid-feedback"
                color="red"
                fontWeight="bold"
            />
            <FormikField 
                name="password"
                placeholder="Password"
            />
            <FormikErrorMessage 
                name="password"
                classOfName="invalid-feedback"
                color="red"
                fontWeight="bold"
            />
            <FormikField 
                name="birthDate"
                placeholder="Birthday"
            />
            <FormikErrorMessage 
                name="birthDate"
                classOfName="invalid-feedback"
                color="red"
                fontWeight="bold"
            />
            <FormikField 
                name="age"
                placeholder="Age"
            />
            <FormikErrorMessage 
                name="age"
                classOfName="invalid-feedback"
                color="red"
                fontWeight="bold"
            />
            <StyledButton type="submit">Submit</StyledButton>
        </StyledForm>
    )
}

export default FormFormik;