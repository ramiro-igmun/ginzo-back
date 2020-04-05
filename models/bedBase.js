/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
const mongoose = require('mongoose');
const config = require('../utils/config');

const bedBaseSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  image: String,
  outstanding: Boolean,
});

bedBaseSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    returnedObject.image = `${config.BASE_URL}${returnedObject.image}`;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('BedBase', bedBaseSchema);
