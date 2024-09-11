import {todosAPI} from "../../api/api";

const initialState = {
    todos: [],
}

const ADD_TODO = 'ADD_TODO';
const EDIT_TODO = 'EDIT_TODO';
const SET_TODOS = 'SET_TODOS';

export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TODOS:
            return {
                ...state,
                todos: [...action.todos]
            }
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.todo]
            }
        case EDIT_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === action.id ?
                    {...todo, text: action.newText} : todo)
            }
        default:
            return state;
    }
}

export const addTodo = (todo) => ({todo, type: ADD_TODO});
export const editTodoText = (id, newText) => ({id, newText, type: EDIT_TODO});
export const setTodos = (todos) => ({todos, type: SET_TODOS});

export const getTodos = () => (dispatch) => {
    return todosAPI.fetchTodos()
        .then(res => {
            dispatch(setTodos(res.todos))
        })
}

export const sendTodo = (todoData) => (dispatch) => {
    return todosAPI.addTodo(todoData)
        .then(res => dispatch(addTodo(res.todoData)))
}

export const removeTodo = (id) => (dispatch) => {
    todosAPI.removeTodo(id)
        .then(res => {
            dispatch(setTodos(res.todos))
        })
}

export const editTodo = (id, newText) => (dispatch) => {
    todosAPI.editTodo(id, newText)
        .then(res => {
            dispatch(editTodoText(id, res.todoData))
        })
}