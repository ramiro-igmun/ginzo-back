/* eslint-disable no-console */
/**
 * Custom logger, it can be easily expanded or replaced
 */
const info = (...params) => {
  console.log(...params);
};

const error = (...params) => {
  console.error(...params);
};

module.exports = {
  info, error,
};
