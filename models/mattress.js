/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
const mongoose = require('mongoose');
const config = require('../utils/config');

const mattressSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  // image: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Image',
  // },
});

mattressSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    // returnedObject.image =
    // `${config.BASE_URL}colchones/${returnedObject.id}/images/${returnedObject.image}`;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('Mattress', mattressSchema);
