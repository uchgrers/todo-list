const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const port = 8000;
const origin = 3000;

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(cors({
    origin : `http://localhost:${origin}`,
    preflightContinue: true,
    credentials: true,
}))

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

let todos = [];

module.exports = todos

const createPostResponse = (statusCode, messages, todoData) => {
    return {
        statusCode,
        messages,
        todoData
    }
}

const createPutResponse = (statusCode, messages, todoData) => {
    return {
        statusCode,
        messages,
        todoData
    }
}

const createDeleteResponse = (statusCode, messages, todos) => {
    return {
        statusCode,
        messages,
        todos
    }
}

app.post('/todos', (req, res) => {
    const newTodo = {
        id: todos.length,
        text: req.body.text
    }
    todos = [...todos, newTodo]
    res.send(createPostResponse(0, [], {
        id: newTodo.id,
        text: newTodo.text
    }))
})

app.put('/todos', (req, res) => {
    if (req.body.type === 'remove') {
        todos = todos.filter(todo => todo.id !== req.body.id)
        for (let i = req.body.id; i < todos.length; i++) {
            todos[i].id = i
        }
        res.send(createDeleteResponse(0, [], todos))
    } else if (req.body.type === 'edit') {
        todos[req.body.id].text = req.body.text
        res.send(createPutResponse(0, [], req.body.text))
    }

})

app.get('/todos', (req, res) => {
    res.send({
        todos,
    });
})

require('./routes/index')(app);

app.listen(port, () => {
    console.log('Server is up and running');
})