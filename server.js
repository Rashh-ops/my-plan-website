// app.js
const express = require('express');
const mongoose = require('mongoose');
const planRoutes = require('./routes/planRoutes');
require('dotenv').config();

const app = express();
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use('/', planRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(3000, () => console.log('Server running on http://localhost:3000'));
  })
  .catch(err => console.error(err));
