const bcrypt = require('bcryptjs');
const logger = require('../utils/logger');
const Mattress = require('../models/mattress');
const BedBase = require('../models/bedBase');
const User = require('../models/user');
const mattressCollection = require('./collections/mattressCollection');
const badeBaseCollection = require('./collections/bedBaseCollection');
const userCollection = require('./collections/userCollection');

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

  if (await User.estimatedDocumentCount() < userCollection.length) {
    await User.deleteMany({});
    const salt = await bcrypt.genSalt(10);
    const hashedUsers = userCollection.map((user) => {
      const passwordHash = bcrypt.hashSync(user.password, salt);
      return new User({
        email: user.email,
        passwordHash,
      });
    });
    await User.insertMany(hashedUsers);
    logger.info('user collection seeded');
  }
};

module.exports = seedDB;
