'use strict';

const concat = (data) => {
  return Object.assign({
    ...data,
    concat: data.array.concat(data.copy)
  });
};

module.exports = {
  concat
};
