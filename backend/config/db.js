const mongoose = require("mongoose");

async function connectDB() {
  const uri =
    process.env.MONGO_URI || "mongodb://127.0.0.1:27017/mern-todo-26-testdb"; // uri in .env or local test db (for cleanup when deploying)
  await mongoose.connect(uri);
  console.log("MongoDB connected");
}

module.exports = connectDB;
