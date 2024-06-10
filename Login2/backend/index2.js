import mysql2 from 'mysql2';
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

// Database connection details (replace with yours)
const pool = mysql2.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Lakshya123@',
  database: 'newstart'
});

// Middleware
app.use(cors()); // Enable CORS for React app to make requests
app.use(express.json()); // Parse incoming JSON data

// Example GET endpoint to retrieve data
app.get('/api/data', async (req, res) => {
  try {
    const [rows] =await pool.query('SELECT * FROM bookdata');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching data');
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
