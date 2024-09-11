import axios from "axios";

const baseRequestParams = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:8000/'
})

const todosUrl = 'todos'

export const todosAPI = {
    fetchTodos() {
        return baseRequestParams.get(todosUrl)
            .then(response => response.data)
    },
    addTodo(todoData) {
      return baseRequestParams.post(todosUrl, todoData)
          .then(response => response.data)
    },
    removeTodo(id) {
        return baseRequestParams.put(todosUrl, {id, type: 'remove'})
            .then(response => response.data)
    },
    editTodo(id, text) {
        return baseRequestParams.put(todosUrl, {id, text, type: 'edit'})
            .then(response => response.data)
    }
}

export const fetchTodos = () => {
    return axios.get('http://localhost:8000/todos')
        .then(response => response.data)
}