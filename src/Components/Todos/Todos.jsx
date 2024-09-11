import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getTodos} from "../../store/reducers/todos-reducer";
import s from './Todos.module.css';
import {selectTodos} from "../../common/selectors";
import Preloader from "../../common/Preloader/Preloader";

const Todos = () => {
    const dispatch = useDispatch();
    const [isInitialized, setIsInitialized] = useState(false);
    const todos = useSelector(state => {
        return selectTodos(state)
    })
    useEffect(() => {
        dispatch(getTodos())
            .then(setIsInitialized(true))
    }, [])
    return (
        <div className={s.todos}>
            {/*<Preloader/>*/}
            {isInitialized ? todos : <Preloader/>}
        </div>
    );
};

export default Todos;