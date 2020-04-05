const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./utils/config');
const seedDB = require('./utils/seedDB');
// const middleware = require('./utils/middleware');

const app = express();

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
seedDB(); // seeds the database if empty

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
