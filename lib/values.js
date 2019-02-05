'use strict';

const values = (data) => {
  const values = data.reverse.values();
  for (const value of values) {
    console.log('value', value);
  }
  return Object.assign({}, {
    ...data,
    values
  });
};

module.exports = {
  values
};
