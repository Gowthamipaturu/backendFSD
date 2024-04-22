const Todo = require('../models/Todo');

// exports.getAllTodos = async (req, res) => {
//   try {
//     const todos = await Todo.find();
//     res.json(todos);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// exports.createTodo = async (req, res) => {
//   const todo = new Todo({
//     title: req.body.title,
//     description: req.body.description,
//   });
//   try {
//     const newTodo = await todo.save();
//     res.status(201).json(newTodo);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

// exports.updateTodo = async (req, res) => {
//   try {
//     const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.json(updatedTodo);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

// exports.deleteTodo = async (req, res) => {
//   try {
//     await Todo.findByIdAndDelete(req.params.id);
//     res.json({ message: 'Todo deleted' });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };


const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createTodo = async (req, res) => {
  const todo = new Todo({
    text: req.body.text,
    description: req.body.description,
  });
  try {
    const newTodo = await todo.save();
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
const updateTodo = async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedTodo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
const deleteTodo = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: 'Todo deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports={createTodo,getAllTodos,deleteTodo,updateTodo}
