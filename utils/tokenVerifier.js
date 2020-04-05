const jwt = require('jsonwebtoken');
const config = require('../config');
const logger = require('./logger');

/**
 * Gets the token from the requests header authorization
 */
const getTokenFrom = (request) => {
  const authorization = request.get('authorization');
  logger.info(authorization);
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7);
  }
  return null;
};

const verifyToken = (request) => {
  if (process.env.NODE_ENV === 'development') {
    return null;
  }
  const token = getTokenFrom(request);
  logger.info('token', token);
  // decode the token using the stored secret key
  const decodedToken = jwt.verify(token, config.SECRET);
  logger.info('decoded token', decodedToken);
  // if the decodedToken has no fields, it has not been succesfully decoded
  if (!token || !decodedToken.id) {
    return { error: 'token missing or invalid' };
  }
  return null;
};

module.exports = verifyToken;
