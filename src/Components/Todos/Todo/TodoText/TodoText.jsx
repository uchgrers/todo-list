import React from 'react';
import s from "../Todo.module.css";

const TodoText = (props) => {
    return (
        <div className={s.textWrapper}>
            <span>{`${props.id}. ${props.text}`}</span>
        </div>
    );
};

export default TodoText;