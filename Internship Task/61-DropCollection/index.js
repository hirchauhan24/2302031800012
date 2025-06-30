const mongoose = require('mongoose');

require('dotenv').config({ path: '../.env' }); // Load .env from parent folder


// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(async () => {
    console.log(" Connected to MongoDB");

    // Drop the 'students' collection
    try {
      const result = await mongoose.connection.db.dropCollection('students');
      console.log("🗑️ Collection dropped:", result);
    } catch (error) {
      if (error.codeName === 'NamespaceNotFound') {
        console.log("Collection 'students' does not exist.");
      } else {
        console.error(" Error dropping collection:", error);
      }
    } finally {
      mongoose.connection.close(); // Close the DB connection
    }
  })
  .catch(err => console.error(" Connection error:", err));