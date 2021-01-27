import React from 'react';
import { Form } from "formik";

// Components =======================
import FormikField from '../../components/Fields/FormikField';
import FormikErrorMessage from '../../components/ErrorMessages/ErrorMessages';

const FormFormik = () =>{

    return(
        <Form style={{ display: "flex", flexDirection: "column" }}>
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
            <button type="submit">Submit</button>
        </Form>
    )
}

export default FormFormik;