import mysql2 from 'mysql2';
import express from 'express';
import cors from 'cors';

// Improved connection configuration
const connection = mysql2.createConnection({
  host: "localhost", // or "127.0.0.1"
  database: "newstart",
  user: "root",
  password: "Lakshya123@", // Replace with your actual password (avoid using the root user)
});

const app = express();
const PORT = 3000;

app.use(express.json())  //It allows us to send any JSON file using a client
app.use(cors())

app.listen(PORT, () => {
  console.log(`SERVER : http://localhost:${PORT}`);

  // Connect to database asynchronously (recommended)
  connection.connect((err) => {
    if (err) {
      console.error("DATABASE CONNECTION FAILED:", err);
      throw err; // Re-throw for potential handling in a higher-level exception handler
    } else {
      console.log("DATABASE CONNECTED");
    }
  });
});

app.get("/bookdata", (req, res) => {
  const sql_query = `SELECT * FROM bookdata`; // Use uppercase for SQL keywords

  // Improved error handling and data sending
  connection.query(sql_query, (err, result) => {
    if (err) {
      console.error("DATABASE QUERY ERROR:", err);
      // Handle errors appropriately (e.g., send an error response to the client)
      res.status(500).send("Error retrieving data");
      return; // Exit the callback function early to prevent sending invalid data
    }

    res.json(result); // Use res.json() to send JSON data
  });
});

app.post("/bookdata", (req,res)=>{
    const q="INSERT INTO bookdata (`title`,`desc`) VALUES (?)"
    const values=[
      req.body.title,
      req.body.desc,
    ];
    connection.query(q,[values],(err,data)=>{
        if (err) return res.json(err);
        return res.json("Book has been created");
    })
})
