require('dotenv').config();

const {
  BASE_URL, MONGODB_URI, PORT, SECRET,
} = process.env;

module.exports = {
  BASE_URL, MONGODB_URI, PORT, SECRET,
};
