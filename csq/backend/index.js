const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root", // Default MySQL username
  password: "", // Default MySQL password
  database: "csq_database", // Your database name
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to MySQL database!");
});

// Route to Add a Lecturer
app.post("/add-lecturer", (req, res) => {
  const { name, email, department, phone } = req.body;
  const query = "INSERT INTO lecturers (name, email, department, phone) VALUES (?, ?, ?, ?)";
  db.query(query, [name, email, department, phone], (err, result) => {
    if (err) {
      console.error("Error adding lecturer:", err);
      res.status(500).send("Error adding lecturer");
      return;
    }
    res.status(200).send("Lecturer added successfully!");
  });
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
