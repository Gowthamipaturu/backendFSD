const express = require('express');
const router = express.Router();
// const TodoController = require('../controllers/todoController');
// router.get('/', TodoController.getAllTodos);
// router.post('/', TodoController.createTodo);
// router.put('/:id', TodoController.updateTodo);
// router.delete('/:id', TodoController.deleteTodo);
const {getAllTodos,createTodo,updateTodo,deleteTodo}=require('../controllers/todoController');

router.get('/', getAllTodos);
router.post('/', createTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);



module.exports = router;
