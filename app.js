const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const logger = require('./utils/logger');
const config = require('./utils/config');
const seedDB = require('./utils/seedDB');
const mattressRouter = require('./routes/mattresses');
// const middleware = require('./utils/middleware');

const app = express();

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    logger.info('connected to MongoDB');
  })
  .catch((error) => {
    logger.info('error connecting to MongoDB:', error.message);
  });
seedDB(); // seeds the database if empty

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/colchones', mattressRouter);

module.exports = app;
