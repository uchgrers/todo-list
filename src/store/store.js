import {configureStore} from "@reduxjs/toolkit";
import {todosReducer} from "./reducers/todos-reducer";

const reducers = {
    todosReducer,
}

const initialState = {}

const store = configureStore({
    reducer: reducers,
    preloadedState: initialState
})

export default store;

window.store = store;