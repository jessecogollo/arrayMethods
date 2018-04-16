'use strict';

const printName = (event) => {
  // console.log('name:', event.name);
};

const forEach = (data) => {
  data.array.forEach(printName);
  return data;
};

module.exports = {
  forEach
};
