//  Create a Collection in MongoDB using Mongoose

require("dotenv").config({ path: "../.env" }); // Load .env from parent folder

const mongoose = require("mongoose");

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log(" Connected to MongoDB");
    createStudent();
  })
  .catch((err) => console.error(" Connection error:", err));

// Define a Schema
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  course: String,
});

// Create a Model (this will create 'students' collection)
const Student = mongoose.model("Student", studentSchema);

// Insert one document (triggers DB + collection creation)
async function createStudent() {
  try {
    const result = await Student.create({
      name: "Hir Chauhan",
      age: 20,
      course: "MERN Stack",
    });
    console.log(" Student created:", result);
  } catch (err) {
    console.error(" Error inserting student:", err);
  } finally {
    mongoose.connection.close();
  }
}
