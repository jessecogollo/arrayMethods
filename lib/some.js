'use strict';

const some = (data) => {
  const some = data.array.some((obj) => obj.description.includes('@jessecogollo'));
  return Object.assign({}, {
    ...data,
    some
  });
};

module.exports = {
  some
};
