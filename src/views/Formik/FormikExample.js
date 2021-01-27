import React from 'react';
import { Formik } from "formik";

// Components =======================
import FormFormik from '../../components/Form/FormFormik';
import UserValidation from '../../components/UserValidation/UserValidation';

const FormikExample = () => {
    return(
        <>
            <h1>
                Formik Validation Train
            </h1>

            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                    birthDate: "",
                    age: "",
                }}
                validationSchema={UserValidation}
                onSubmit={(fields) => {
                    alert('You are logged in')
                }}
            >
                <FormFormik />
            </Formik>

        </>
    )
}

export default FormikExample;