const jwt = require('jsonwebtoken');
const config = require('./config');
const logger = require('./logger');

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
  const decodedToken = jwt.verify(token, config.SECRET);
  logger.info('decoded token', decodedToken);
  if (!token || !decodedToken.id) {
    return { error: 'token missing or invalid' };
  }
  return null;
};

module.exports = verifyToken;
