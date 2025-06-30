// DB Tasks 62–68 using Mongoose

require("dotenv").config({ path: "../.env" });
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log(" Connected to MongoDB"))
  .catch((err) => console.error(" DB Connection Failed", err));

//  Schema & Model
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  course: String,
  marks: Number,
});

const Student = mongoose.model("Student", studentSchema);

async function runAllTasks() {
  // 🔹 InsertOne
  await Student.create({ name: "Amit", age: 21, course: "BCA", marks: 78 });

  // 🔹 InsertMany
  await Student.insertMany([
    { name: "Hir", age: 20, course: "BCA", marks: 70 },
    { name: "Umang", age: 21, course: "BBA", marks: 84 },
    { name: "Devershi", age: 22, course: "BSc", marks: 75 },
  ]);

  // 🔹 Find One
  const one = await Student.findOne({ name: "Hir" });
  console.log(" Find One:", one);

  // 🔹 Find with where
  const age21 = await Student.find({ age: 21 });
  console.log(" Age 21 Students:", age21);

  // 🔹 Projection (only name and marks)
  const projection = await Student.find({}, { name: 1, marks: 1, _id: 0 });
  console.log(" Projection:", projection);

  // 🔹 Update One
  await Student.updateOne({ name: "Umang" }, { $set: { course: "MCA" } });

  // 🔹 Update Many
  await Student.updateMany(
    { age: { $gte: 21 } },
    { $set: { status: "updated" } }
  );

  // 🔹 Insert If Not Exists (Upsert)
  await Student.updateOne(
    { name: "NewStudent" },
    { $set: { age: 20, course: "MBA", marks: 70 } },
    { upsert: true }
  );

  // 🔹 Operators
  const inQuery = await Student.find({ course: { $in: ["BCA", "BSc"] } });
  console.log(" $in Operator:", inQuery);

  const marksAbove60 = await Student.find({ marks: { $gt: 60 } });
  console.log(" $gt Operator:", marksAbove60);

  const logicQuery = await Student.find({
    $or: [{ course: "BCA" }, { age: { $lt: 22 } }],
  });
  console.log(" $or Operator:", logicQuery);

  //  Done
  mongoose.connection.close();
}

runAllTasks();
