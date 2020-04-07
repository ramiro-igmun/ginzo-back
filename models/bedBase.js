/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
const mongoose = require('mongoose');
const config = require('../config');

const bedBaseSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  image: String,
  outstanding: Boolean,
  type: String,
});

/**
 * Format the object before returning it to the client
 * The image is returned as an URL constructed with an env variable
 */
bedBaseSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    returnedObject.image = `${config.BASE_URL}${returnedObject.image}`;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('BedBase', bedBaseSchema);
