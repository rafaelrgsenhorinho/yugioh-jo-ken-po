const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

router.get('/', (req, res) => {
  try {
    const filePath = path.join(__dirname, '../scripts/cardData.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    res.json(data);
  } catch (error) {
    console.error('Error reading card data:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;