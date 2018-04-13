'use strict';

const fill = (data) => {
  return Object.assign({
    ...data,
    fill: data.of.fill(true)// , 1, 3
  });
};

module.exports = {
  fill
};
