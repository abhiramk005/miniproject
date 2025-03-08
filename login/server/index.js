const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require("./models/Employees");

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB with error handling
mongoose
  .connect("mongodb://127.0.0.1:27017/employee", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Register endpoint
app.post("/register", (req, res) => {
    console.log("Received data:", req.body); // Debugging log

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ error: "All fields are required" });
    }

    EmployeeModel.create({ name, email, password })
        .then(employee => res.json(employee))
        .catch(err => res.status(500).json({ error: err.message }));
});


// Start the server
app.listen(4000, () => {
  console.log("Server is running on port 3001");
});
