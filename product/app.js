const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 5000;
const Todo = require("./models/Todo");

const app = express();
app.use(cors());
app.use(bodyParser.json());
//This built-in middleware was added in Express version 4.16.0 to simplify request body parsing
// app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(
   // "mongodb+srv://gowthamilakshmipathyk:gowthamip@cluster0.hlpgf31.mongodb.net/?retryWrites=true&w=majority",
   "mongodb+srv://ranisheebha:Its123@cluster0.d4u9mqj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

// // Todo Schema
// const todoSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   completed: Boolean,
// });

// const Todo = mongoose.model("Todo", todoSchema);

// POST route to create a new Todo
app.post("/todos", async (req, res) => {
  try {
    // const { title, description, completed } = req.body;
    // const newTodo = new Todo({
    //   title,
    //   description,
    //   completed,
    // });
    const newTodo = new Todo(req.body);
    await newTodo.save();
    res.status(201).json({ message: "todo has been creted", newTodo: newTodo });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET route to fetch all Todos
app.get("/todos", async (req, res) => {
  try {
    const todos = await Todo.find(); //{ghgfhwefwgfjhwgj}

    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PUT route to update an existing Todo
app.put("/todos/:id", (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;

  Todo.findByIdAndUpdate(id, { title, description, completed }, { new: true })
    .then((updatedTodo) => {
      if (!updatedTodo) {
        return res.status(404).json({ message: "Todo not found" });
      }
      res.json(updatedTodo);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
