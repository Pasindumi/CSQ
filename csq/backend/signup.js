const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();


app.use(cors());
app.use(bodyParser.json());


const db = mysql.createConnection({
  host: "localhost",
  user: "root", 
  password: "", 
  database: "csq_database", 
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to MySQL database!");
});



app.post("/signup", (req, res) => {
  const { user, email, password } = req.body;

  const query = `
    INSERT INTO lecturers (user, email, password) 
    VALUES (?, ?, ?)
  `;

  db.query(query, [user, email, password], (err, result) => {
    if (err) {
      console.error("Error during sign-up:", err);
      res.status(500).send("Error signing up");
      return;
    }
    res.status(200).send("Sign-up successful!");
  });
});


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
