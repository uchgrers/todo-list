import {createSelector} from "reselect";
import Todo from "../Components/Todos/Todo/Todo";
import React from "react";

const todosSelector = state => state.todosReducer.todos

export const selectTodos = createSelector([todosSelector], todos => {
    return todos.map(todo => (<Todo key={todo.id} id={todo.id} text={todo.text}/>))
})