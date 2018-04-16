'use strict';

const includes = (data) => {
  return Object.assign({
    ...data,
    includes: data.of.includes(true)
  });
};

module.exports = {
  includes
};
