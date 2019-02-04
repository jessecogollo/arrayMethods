'use strict';

const reverse = (data) => {
  // console.log('of:', data.of);
  // console.log('fill:', data.fill);
  const reverse = data.fill.reverse();
  // console.log('of:', data.of);
  // console.log('fill:', data.fill);
  return Object.assign({}, {
    ...data,
    reverse
  });
};

module.exports = {
  reverse
};
