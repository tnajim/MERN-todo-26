const express = require("express");
const app = express();
const port = 3000;

let todos = {
  id: 1,
  todoText: "make a website",
  completed: false,
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Read all todos
app.get("/todos", (req, res) => {
  res.send("list all todos");
});

// Create a todo
app.post("/todos", (req, res) => {
  res.send("todo post route");
});

// Read data for a todo (maybe use for prefilling edit form)
app.get("/todos/:id", (req, res) => {
  res.send("display a single todo with the id:");
});

// Update todo
app.put("/todos/:id", (req, res) => {
  res.send("update todo id:");
});

// Delete route
app.delete("/todos/:id", (req, res) => {
  res.send("delete route for id:");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
