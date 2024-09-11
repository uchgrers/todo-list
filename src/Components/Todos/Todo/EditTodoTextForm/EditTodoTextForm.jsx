import React from 'react';
import s from "../Todo.module.css";
import {validateTodoInput} from "../../../../common/formValidators";
import {useForm} from "react-hook-form";
import InputError from "../../../../common/InputError/InputError";

const EditTodoTextForm = (props) => {
    const {register, handleSubmit, formState: {errors}, clearErrors} = useForm({
        defaultValues: {todoText: props.text}
    });
    return (
            <form onSubmit={handleSubmit(props.onSubmit)} className={s.editBoxForm}>
                {errors[validateTodoInput.name] && <InputError errors={errors}/>}
                <input  {...register(validateTodoInput.name, validateTodoInput.validationParams)}
                        onChange={() => clearErrors(validateTodoInput.name)}
                        autoFocus={true}
                        type="text"
                />
                <button>Save</button>
            </form>
    );
};

export default EditTodoTextForm;