const express = require('express');
const router = express.Router();
const searchController = require('./searchController');

router.post('/search', searchController.handleSearch);

module.exports = router;