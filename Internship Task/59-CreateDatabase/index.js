//  Create and Insert into MongoDB Database using Node.js

// 1. Import mongoose
const mongoose = require("mongoose");

//2 . Get ENV Variable
require('dotenv').config({ path: '../.env' });
const uri = process.env.MONGODB_URI;

// 3. Connect to MongoDB
mongoose
  .connect(uri, {})
  .then(() => console.log(" Connected to MongoDB"))
  .catch((err) => console.error(" Connection error:", err));

// 4. Create a Schema
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  branch: String,
});

// 5. Create a Model
const Student = mongoose.model("Student", studentSchema);

// 6. Insert a record
const newStudent = new Student({
  name: "Hir Chauhan",
  age: 20,
  branch: "CSE",
});

newStudent
  .save()
  .then(() => console.log(" Student added to the database"))
  .catch((err) => console.error("Error saving student:", err));
