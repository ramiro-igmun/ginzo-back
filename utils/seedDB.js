const logger = require('./logger');
const Mattress = require('../models/mattress');
const mattressCollection = require('../data/mattressCollection');

const seedDB = async () => {
  if (await Mattress.estimatedDocumentCount() < mattressCollection.length) {
    await Mattress.deleteMany({});
    await Mattress.insertMany(mattressCollection);
    logger.info('db seeded');
  }
};

module.exports = seedDB;
