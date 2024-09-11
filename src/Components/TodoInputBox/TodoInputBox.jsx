import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {sendTodo} from "../../store/reducers/todos-reducer";
import {useForm} from "react-hook-form";
import {validateTodoInput} from "../../common/formValidators";
import s from './TodoInputBox.module.css';
import InputError from "../../common/InputError/InputError";
import Preloader from "../../common/Preloader/Preloader";

const TodoInputBox = () => {

    const {register, handleSubmit, formState: {errors}, clearErrors, reset} = useForm();

    const [isSafeToReset, setIsSafeToReset] = useState(false);
    const [todoIsSent, setTodoIsSent] = useState(false);
    useEffect(() => {
        if (isSafeToReset) {
            setIsSafeToReset(false);
            reset();
        }
    },[isSafeToReset])

    const dispatch = useDispatch();
    const todosLength = useSelector(state => {
        return state.todosReducer.todos.length
    })
    const onSubmit = (data) => {
        setTodoIsSent(true);
        dispatch(sendTodo({id: todosLength + 1, text: data[validateTodoInput.name]}))
            .then(setTodoIsSent(false))
        setIsSafeToReset(true);
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
            {errors[validateTodoInput.name] && <InputError errors={errors}/>}
            <div>
                <input placeholder='Enter todo text...'
                       {...register(validateTodoInput.name,
                           {...validateTodoInput.validationParams})}
                       onChange={() => clearErrors(validateTodoInput.name)}
                />
            </div>
            <div>
                <button className={s.addTodoButton}>{todoIsSent ? <div className={s.preloaderWrapper}><Preloader color={'light'}/></div> : 'Add todo'}</button>
            </div>
        </form>
    );
};

export default TodoInputBox;