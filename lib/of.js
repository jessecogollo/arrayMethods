'use strict';

const of = (data) => {
  return Object.assign({
    ...data,
    of: Array.of(typeof data.array, typeof data.length, typeof data.copy, typeof data.isArray)
  });
};

module.exports = {
  of
};
