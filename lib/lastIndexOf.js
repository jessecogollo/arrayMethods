'use strict';

const lastIndexOf = (data) => {
  const lastIndexOf = data.fill.lastIndexOf(true);
  return Object.assign({
    ...data,
    lastIndexOf
  });
};

module.exports = {
  lastIndexOf
};
