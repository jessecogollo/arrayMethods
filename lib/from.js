'use strict';

const from = (array) => {
  const copy = Array.from(array.array);
  return Object.assign({
    length: array.length,
    array: array.array,
    copy
  });
};

module.exports = {
  from
};
