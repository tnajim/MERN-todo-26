const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");

// Read all todos
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    console.error("Error fetching todos:", error);
    res.status(500).json({ message: "Could not fetch todos" });
  }
});

// Create a todo
router.post("/", async (req, res) => {
  try {
    const { title } = req.body;
    const newTodo = await Todo.create({ title });
    res.status(201).json(newTodo);
  } catch (error) {
    console.error("Error creating todo:", error);
    res
      .status(500)
      .json({ message: "Could not create todo", error: error.message });
  }
});

// Read data for a todo (maybe use for prefilling edit form)
router.get("/:id", async (req, res) => {
  const todoId = req.params.id;
  try {
    const todo = await Todo.findById(todoId);
    if (!todo) {
      return res
        .status(404)
        .json({ message: `Todo with ID ${todoId} not found` });
    }
    res.status(200).json(todo);
  } catch (error) {
    console.error("Error fetching todo:", error);
    res.status(500).json({ message: `Could not fetch todo id no: ${todoId}` });
  }
});

// Update todo
router.put("/:id", (req, res) => {
  const todoId = req.params.id;
  res.send("api put route for id: " + todoId);
  // use the id to search and edit that todo in the database
});

// Delete route
router.delete("/:id", (req, res) => {
  const todoId = req.params.id;
  res.send("api delete route for id: " + todoId);
  // find and delete todo from database

  //res.status(204).send(); to send a response
});

// Export the router so server.js can use it
module.exports = router;
