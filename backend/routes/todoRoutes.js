const express = require("express");
const router = express.Router();

let todos = {
  id: 1,
  todoText: "make a website",
  completed: false,
};

// Read all todos
router.get("/", (req, res) => {
  res.json(todos);
});

// Create a todo
router.post("/", (req, res) => {
  res.send("api post todo route");
  // get req.body and create a new todo
  // res.status(201).json(newTodo); maybe to send the new todo for instant update
});

// Read data for a todo (maybe use for prefilling edit form)
router.get("/:id", (req, res) => {
  const todoId = req.params.id;
  // get that todo from database
  // res.json(todo) from the database
  res.send("display a single todo with the id: " + todoId);
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
