const logger = require('./logger');
const Mattress = require('../models/mattress');
const mattressCollection = require('../data/mattressCollection');

const seedDB = async () => {
  if (!await Mattress.estimatedDocumentCount()) {
    Mattress.insertMany(mattressCollection);
    logger.info('db seeded');
  }
};

module.exports = seedDB;
