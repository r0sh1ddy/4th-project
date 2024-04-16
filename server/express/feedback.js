const express = require('express');
const router = express.Router();

// Assuming you have set up a database connection

router.post('/feedback', async (req, res) => {
  try {
    const { feedback } = req.body;

    // Save the feedback to the database
    const result = await saveToDatabase(feedback);

    if (result) {
      res.status(200).json({ message: 'Feedback submitted successfully' });
    } else {
      res.status(500).json({ message: 'Failed to submit feedback' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});



module.exports = router;