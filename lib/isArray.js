'use strict';

const isArray = (data) => {
  return Object.assign({
    ...data,
    isArray: Array.isArray(data.array)
  });
};

module.exports = {
  isArray
};
