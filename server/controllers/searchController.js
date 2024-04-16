const connection = require('./database');

exports.handleSearch = (req, res) => {
  const { searchQuery } = req.body;

  try {
    const query = `
      SELECT * FROM weather_data
      WHERE location LIKE '%${searchQuery}%' OR description LIKE '%${searchQuery}%'
    `;

    connection.query(query, (err, results) => {
      if (err) {
        console.error('Error performing search:', err);
        res.status(500).json({ error: 'Error performing search' });
        return;
      }

      res.status(200).json(results);
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error performing search' });
  }
};