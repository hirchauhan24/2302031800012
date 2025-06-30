//  Node.js + Express API Server

const express = require("express");
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Sample route
app.get("/", (req, res) => {
  res.send(" Hello from Node.js and Express!");
});

// API route
app.get("/api/data", (req, res) => {
  res.json({ message: "Hello from Express API" });
});

// Server listen on port
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
