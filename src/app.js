const express = require('express');
const app = express();
const path = require('path');
const cardsRoute = require('./cardsRoute/cardsRoute.js');

app.use('/cards', cardsRoute);

app.use(express.static(path.join(__dirname, '../api/', api)))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'index.html'));
});

module.exports = app;