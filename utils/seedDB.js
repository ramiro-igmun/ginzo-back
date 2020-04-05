const logger = require('./logger');
const Mattress = require('../models/mattress');
const BedBase = require('../models/bedBase');
const mattressCollection = require('../data/mattressCollection');
const badeBaseCollection = require('../data/bedBaseCollection');

const seedDB = async () => {
  if (await Mattress.estimatedDocumentCount() < mattressCollection.length) {
    await Mattress.deleteMany({});
    await Mattress.insertMany(mattressCollection);
    logger.info('mattress collection seeded');
  }

  if (await BedBase.estimatedDocumentCount() < badeBaseCollection.length) {
    await BedBase.deleteMany({});
    await BedBase.insertMany(badeBaseCollection);
    logger.info('bedBase collection seeded');
  }
};

module.exports = seedDB;
