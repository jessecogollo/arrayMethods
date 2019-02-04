'use strict';

const slice = (data) => {
  console.log('of:', data.of);
  console.log('fill:', data.fill);
  console.log('reverse:', data.reverse);
  const slice = data.reverse.slice(0, 1);
  console.log('of:', data.of);
  console.log('fill:', data.fill);
  console.log('reverse:', data.reverse);
  return Object.assign({}, {
    ...data,
    slice
  });
};

module.exports = {
  slice
};
