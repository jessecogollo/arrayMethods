'use strict';

const push = (data) => {
  const push = data.fill.push(false, 'string', 2019);
  return Object.assign({}, {
    ...data,
    push
  });
};

module.exports = {
  push
};
