const jwt = require('jsonwebtoken');
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
  const token = getTokenFrom(request);
  logger.info('token', token);
  const decodedToken = jwt.verify(token, process.env.SECRET);
  logger.info('decoded token', decodedToken);
  if (!token || !decodedToken.id) {
    return { error: 'token missing or invalid' };
  }
  return null;
};

module.exports = verifyToken;
