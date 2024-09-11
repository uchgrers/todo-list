import React from 'react';
import s from "../Todo.module.css";
import editIcon from "../../../../icons/editIcon.svg";
import deleteIcon from "../../../../icons/deleteIcon.svg";

const TodoControls = (props) => {
    return (
        <div className={s.buttonBox}>
            <button onClick={props.editTodoText}><img className={s.icon + ' ' + s.editIcon} src={editIcon} alt="Edit"/></button>
            <button onClick={props.removeTask}><img className={s.icon + ' ' + s.deleteIcon} src={deleteIcon} alt="Delete"/></button>
        </div>
    );
};

export default TodoControls;