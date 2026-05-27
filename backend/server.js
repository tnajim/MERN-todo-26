const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
require("dotenv").config();
const connectDB = require("./config/db");

async function startServer() {
  await connectDB();

  app.use(express.json());
  const todoRoutes = require("./routes/todoRoutes");
  app.use("/api/todos", todoRoutes);

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start app:", err);
  process.exit(1);
});
