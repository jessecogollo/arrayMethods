'use strict';

const pop = (data) => {
  const pop = data.fill.pop();
  return Object.assign({}, {
    ...data,
    pop
  });
};

module.exports = {
  pop
};
