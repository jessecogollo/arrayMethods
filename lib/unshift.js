'use strict';

const unshift = (data) => {
  console.log('reverse:', data.reverse);
  const unshift = data.reverse.unshift('javier', 'alvarez');
  console.log('reverse:', data.reverse);
  return Object.assign({}, {
    ...data,
    unshift
  });
};

module.exports = {
  unshift
};
