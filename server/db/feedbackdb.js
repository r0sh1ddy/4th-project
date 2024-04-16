const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'feedback'
});

const feedback = 'This is a sample feedback text.';

const query = 'INSERT INTO feedback (feedback_text) VALUES (?)';

connection.query(query, [feedback], (err, result) => {
  if (err) throw err;
  console.log(`Feedback inserted with ID: ${result.insertId}`);
});