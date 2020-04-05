require('dotenv').config();

const { BASE_URL, MONGODB_URI, PORT } = process.env;

module.exports = {
  BASE_URL, MONGODB_URI, PORT,
};
