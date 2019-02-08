'use strict';

const fnFlatMap = (element) => element.split(" ");

const flatmap = (data) => {
  const arr1 = ["it's Sunny in", "", "California"];
  const flatmap = arr1.flatMap(fnFlatMap);
  return Object.assign({}, {
    ...data,
    flatmap
  });
};

module.exports = {
  flatmap
};
