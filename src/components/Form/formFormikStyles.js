import { Form } from "formik";
import styled from 'styled-components';

export const StyledForm = styled(Form)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const StyledButton = styled.button`
    background-color: #09A7BC;
    color: #fff;
    font-family: 'Rye';
    width: 170px;
    border: none;
    border-radius: 25px;
    padding: 14px;
    font-size: 21px;
    margin-top: 19px;
    cursor: pointer;

    &:hover{
        background-color: black;
        transition: .5s all ease-in-out;
    }
`