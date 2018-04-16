'use strict';

const join = (data) => {
  console.log('xxx');
  return Object.assign({
    ...data,
    join: data.of.join(' * ')
  });
};

module.exports = {
  join
};
