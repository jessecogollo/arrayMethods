'use strict';

const unshift = (data) => {
  const unshift = data.reverse.unshift('javier', 'alvarez');
  return Object.assign({}, {
    ...data,
    unshift
  });
};

module.exports = {
  unshift
};
