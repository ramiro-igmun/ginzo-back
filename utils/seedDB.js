const Mattress = require('../models/mattress');
const mattressCollection = require('../data/mattressCollection');

const seedDB = async () => {
  if (!await Mattress.count()) {
    Mattress.insertMany(mattressCollection);
  }
};

module.exports = seedDB;
