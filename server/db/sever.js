const express = require('express');
const app = express();
const port = 9764;

const searchController = require('./searchController');

// Middleware to parse JSON request bodies
app.use(express.json());

// Route for handling search requests
app.post('/api/search', searchController.handleSearch);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});