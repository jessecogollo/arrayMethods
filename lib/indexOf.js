'use strict';

const indexOf = (data) => {
  return Object.assign({
    ...data,
    indexOf: data.of.indexOf(true)
  });
};

module.exports = {
  indexOf
};
