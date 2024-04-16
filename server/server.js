// Import required packages
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const db = require("./db/db")
// Create an instance of Express app
const app = express();

const authRoutes =  require("./routes/auth_routes")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use("/auth", authRoutes)

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  db
  console.log(`Server is running on port ${PORT}`);
});


