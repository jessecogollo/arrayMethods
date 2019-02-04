'use strict';

const shift = (data) => {
  console.log('of:', data.of);
  console.log('fill:', data.fill);
  console.log('reverse:', data.reverse);
  const shift = data.reverse.shift();
  console.log('of:', data.of);
  console.log('fill:', data.fill);
  console.log('reverse:', data.reverse);
  return Object.assign({}, {
    ...data,
    shift
  });
};

module.exports = {
  shift
};
