// Import required packages
const express = require("express");

// Create an instance of Express router
const router = express.Router();

// Routes
router.get("/", (req, res) => {
  res.send("Hello World!");
});

// Login route
router.post("/login", (req, res) => {
  console.log(req.body);
});

// Signup route
router.post("/signup", async (req, res) => {
  const { firstName, lastName, emailAddress, password, county } = req.body;

});

// Forgot password route
router.post("/forgot-password", (req, res) => {
  // Implement your forgot password logic here
});

// Start the server
module.exports = router;
