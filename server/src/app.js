import express from 'express';
import Todo from './models/todo.js'
import { syncronize } from './db/connect.js';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.static('../client/dist'));

// CRUD for todo

// get all todos
app.get('/api/todo', async (_req, res) => {
    try {
        const allTodos = await Todo.findAll();
        res.json(allTodos);
    } catch (err) {
        console.log('Failed to GET /api/todo', err);
    }
});

// get single todo by id:
app.get('/api/todo/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const todo = await Todo.findByPk(id);
        res.json({ todo })
    } catch (err) {
        console.log('Failed to GET /api/todo/:id', err)
    }
});

// create a todo: 
app.post('/api/todo', async (req, res) => {
    // destructure here to prevent sql injections
    const { text, ts } = req.body;
    try {
        const newTodo = await Todo.create({ text, ts });
        res.status(201).json({ id: newTodo.id });
    } catch (err) {
        console.log('Failed to POST /api/todo', err)
    }
});

// update a todo: 
app.put('/api/todo/:id', async (req, res) => {
    const { id } = req.params;
    const { text } = req.body;
    try {
        const todo = await Todo.findByPk(id);
        todo.text = text;
        todo.save();
    } catch (err) {
        console.log('Failed to PUT /api/todo/:id', err)
    }
});

// delete a todo: 
app.delete('/api/todo/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await Todo.destroy({ where: { id } });
        res.status(200).send();
    } catch (err) {
        console.log('Failed to DELETE /api/todo/:id', err)
    }
});

app.listen(PORT, async () => {
    await syncronize(); // force sync the ORM with the database
    console.log(`Backend Express app listening on port ${PORT}`);
});
