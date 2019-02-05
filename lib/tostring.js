'use strict';

const tostring = (data) => {
  const tostring = data.reverse.toString();
  return Object.assign({}, {
    ...data,
    tostring
  });
};

module.exports = {
  tostring
};
