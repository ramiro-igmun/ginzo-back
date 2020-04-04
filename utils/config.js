require('dotenv').config();

let { BASE_URL } = process.env;
let { MONGODB_URI } = process.env;

module.exports = { BASE_URL, MONGODB_URI };
