const express = require('express');
const {getAllTodos,postATodo,updateTodo,home,deleteTodo,getSingleTodo} = require('../controllers/todoController');

const router = express.Router();

// Defining routes for the API
router.get('/',home);
router.get('/todoTasks',getAllTodos);
router.post('/todoTasks',postATodo);
router.put('/todoTasks/:Id',updateTodo);
router.delete('/todoTasks/:Id',deleteTodo);
router.get('/todoTasks/:Id',getSingleTodo);

// Exporting the router
module.exports = {
    router
};
