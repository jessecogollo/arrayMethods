'use strict';

const join = (data) => {
  return Object.assign({
    ...data,
    join: data.of.join(' * ')
  });
};

module.exports = {
  join
};
