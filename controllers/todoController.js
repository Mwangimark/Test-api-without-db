const todoTasks = require('../data');

//exporting and defining route handlers/ controllers
module.exports = {
    home: (req, res) => {
        //sending response with text format
        res.send('Welcome to todo list');
    },

    getAllTodos: (req, res) => {
        //sending response with json format
        res.json({
            success: true,
            message: "fetched todos successfully",
            results: todoTasks
        });
    },

    postATodo: (req, res) => {
        todoTasks.push(req.body);
        //sending response with json format and setting status codes
        res.status(201).json({
            success: true,
            message: "added the todo successfully",
            results: req.body
        });
    },

    updateTodo: (req, res) => {
        const { Id } = req.params;
        const { task, priority, dueDate } = req.body;
        const todoIndex = todoTasks.findIndex((todo) => todo.id === Number(Id));

        if (todoIndex !== -1) {
            todoTasks[todoIndex] = { ...todoTasks[todoIndex], task, priority, dueDate };
            res.status(200).json({
                success: true,
                message: 'Updated the todo successfully',
                results: todoTasks[todoIndex]
            });
        } else {
            res.status(404)({
                success: false,
                message: 'Update failed'
            })
        }
    },
    deleteTodo: (req, res) => {
        const { Id } = req.params;
        const deleteIndex = todoTasks.findIndex((todo) => todo.id === Number(Id));

        if (deleteIndex !== -1) {
            const deletedTodo = todoTasks.splice(deleteIndex, 1);
            res.status(200).json({
                success: true,
                message: `The object at index ${deleteIndex} is deleted`,
                results: deletedTodo
            });
        } else {
            res.status(404).json({
                success: false,
                message: "Deletion Failed: Todo not found"
            });
        }
    },
    getSingleTodo: (req, res) => {
        const { Id } = req.params;
        const singleTodo = todoTasks.find((todo)=>todo.id === Number(Id))

        if (singleTodo) {
            res.status(200).json({
                success: true,
                message: "Single Todo",
                results: singleTodo
            });
        }else {
            res.status(404).json({
                success: false,
                message: "Does not exist"
            })
        }
    }


};
