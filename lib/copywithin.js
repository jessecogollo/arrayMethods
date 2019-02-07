'use strict';

const copywithin = (data) => {
  const copywithin = data.reverse.copyWithin(2);
  // const copywithin = data.reverse.copyWithin(2, 4);
  // const copywithin = data.reverse.copyWithin(2, 4, 5);
  return Object.assign({}, {
    ...data,
    copywithin
  });
};

module.exports = {
  copywithin
};
