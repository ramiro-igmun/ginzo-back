const logger = require('../utils/logger');

/**
 * logs in the console all the requests made to the server
 */
const requestLogger = (request, response, next) => {
  const { authorization } = request.headers;

  logger.info('Method:', request.method);
  logger.info('Path:  ', request.path);
  logger.info('Body:  ', request.body);
  if (authorization) {
    logger.info('Authorization:', request.headers.authorization);
  }
  logger.info('---');
  next();
};

module.exports = requestLogger;
