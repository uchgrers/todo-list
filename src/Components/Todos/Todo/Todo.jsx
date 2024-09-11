import React, {memo, useState} from 'react';
import {useDispatch} from "react-redux";
import {editTodo, removeTodo} from "../../../store/reducers/todos-reducer";
import s from './Todo.module.css';
import EditTodoTextForm from "./EditTodoTextForm/EditTodoTextForm";
import TodoText from "./TodoText/TodoText";
import TodoControls from "./TodoControls/TodoControls";

const Todo = (props) => {
    const dispatch = useDispatch();
    const [isInEditMode, setIsInEditMode] = useState(false);
    const removeTask = () => {
        dispatch(removeTodo(props.id));
    }
    const editTodoText = () => {
        setIsInEditMode(true);
    }
    const onSubmit = (data) => {
        dispatch(editTodo(props.id, data.todoText));
        setIsInEditMode(false);
    }
    return (
        <div>
            {isInEditMode && <EditTodoTextForm onSubmit={onSubmit} isInEditMode={isInEditMode} text={props.text}/>}
            <div className={s.todo}>
                <TodoText id={props.id + 1} text={props.text}/>
                <TodoControls editTodoText={editTodoText} removeTask={removeTask}/>
            </div>
        </div>
    );
};

export default memo(Todo);