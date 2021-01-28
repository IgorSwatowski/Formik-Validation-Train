import React from 'react';
import { Formik } from "formik";

// Components =======================
import FormFormik from '../../components/Form/FormFormik';
import UserValidation from '../../components/UserValidation/UserValidation';

// Styles ============================
import { 
    TitleSection, 
    MainTitle, 
    BlueTitle, 
    TriangleTopRight,
    TriangleBottomLeft 
} from './formStyles';

const FormikExample = () => {
    return(
        <>  
            <TriangleTopRight />
            <TitleSection>
                <MainTitle>
                    Formik <br/>Validation <BlueTitle>Train</BlueTitle>
                </MainTitle>
            </TitleSection>

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
            <TriangleBottomLeft />
        </>
    )
}

export default FormikExample;