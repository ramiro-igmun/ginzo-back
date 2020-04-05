/* eslint-disable consistent-return */
const logger = require('../utils/logger');

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' });
};

const errorHandler = (error, request, response, next) => {
  logger.error(error.message);

  if (error.name === 'ValidationError' || error.name === 'MongoError') {
    return response.status(400).json({ error: error.message });
  }
  if (error.name === 'CastError') {
    return response.status(400).send({ error: `field "${error.path}" has incorrect format` });
  }
  if (error.name === 'JsonWebTokenError') {
    return response.status(400).send({ error: error.message });
  }

  next(error);
};

module.exports = {
  unknownEndpoint,
  errorHandler,
};
