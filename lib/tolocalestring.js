'use strict';

const tolocalestring = (data) => {
  const tolocalestring = data.reverse.toLocaleString();
  return Object.assign({}, {
    ...data,
    tolocalestring
  });
};

module.exports = {
  tolocalestring
};
