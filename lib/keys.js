'use strict';

const goThrouthKeys = (keys) => {
  for (let key of keys) {
    // console.log(key);
  }
};

const keys = (data) => {
  const keys = data.array.keys();
  goThrouthKeys(keys);
  return Object.assign({
    ...data,
    keys
  });
};

module.exports = {
  keys
};
