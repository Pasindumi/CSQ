const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads"))); // Serve uploaded files

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique file name
  },
});
const upload = multer({ storage });

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
app.post("/add-lecturer", upload.single("profilePicture"), (req, res) => {
  const {
    firstName,
    lastName,
    email,
    faculty,
    department,
    phone,
    birthday,
    joinDate,
    staffId,
  } = req.body;
  const profilePicture = req.file ? `/uploads/${req.file.filename}` : null;

  const query = `
    INSERT INTO lecturers (firstName, lastName, email, faculty, department, phone, birthday, joinDate, staffId, profilePicture) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  db.query(
    query,
    [
      firstName,
      lastName,
      email,
      faculty,
      department,
      phone,
      birthday,
      joinDate,
      staffId,
      profilePicture,
    ],
    (err, result) => {
      if (err) {
        console.error("Error adding lecturer:", err);
        res.status(500).send("Error adding lecturer");
        return;
      }
      res.status(200).send("Lecturer added successfully!");
    }
  );
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
