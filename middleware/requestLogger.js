const logger = require('../utils/logger');

/**
 * logs in the console all the requests made to the server
 */
const requestLogger = (request, response, next) => {
  logger.info('Method:', request.method);
  logger.info('Path:  ', request.path);
  logger.info('Body:  ', request.body);
  logger.info('---');
  next();
};

module.exports = requestLogger;
