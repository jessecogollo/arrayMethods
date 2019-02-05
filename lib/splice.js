'use strict';

const splice = (data) => {
  // console.log('of:', data.of);
  // console.log('fill:', data.fill);
  // console.log('reverse:', data.reverse);
  const splice = data.reverse.splice(1, 1, "jesse", "Cogollo");
  // console.log('of:', data.of);
  // console.log('fill:', data.fill);
  // console.log('reverse:', data.reverse);
  return Object.assign({}, {
    ...data,
    splice
  });
};

module.exports = {
  splice
};
