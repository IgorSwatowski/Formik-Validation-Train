import React from 'react';
import { Formik } from "formik";

// Components =======================
import FormFormik from '../../components/Form/FormFormik';

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
                onSubmit={(fields) => {
                console.log(fields);
                }}
            >
                <FormFormik />
            </Formik>

        </>
    )
}

export default FormikExample;