import React from 'react';
import {validateTodoInput} from "../formValidators";
import s from './InputError.module.css';

const InputError = (props) => {
    return (
            <p className={s.error}>{props.errors[validateTodoInput.name].message}</p>
    );
};

export default InputError;