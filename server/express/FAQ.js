const express = require('express');
const mysql = require('mysql');

const app = express();

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'weather_faq'
});

// Connect to the database
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database!');
});

// Search endpoint
app.get('/api/search', (req, res) => {
  const searchTerm = req.query.term.toLowerCase();

  // Query the database to fetch filtered questions
  const query = `
    SELECT id, question, link
    FROM questions
    WHERE question LIKE '%${searchTerm}%'
  `;

  connection.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Start the server
app.listen(9764, () => {
  console.log('Server is running on port 9764');
});