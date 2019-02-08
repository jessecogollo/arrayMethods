'use strict';

const flat = (data) => {
  const arr1 = [1, 2, [3, 4]];
  const flat = arr1.flat();

  const arr2 = [1, 2, [3, 4, [5, 6]]];
  const flatArr2 = arr2.flat();
  console.log('flatArr2', flatArr2);
  const arr3 = [1, 2, [3, 4, [5, 6]]];
  const flatArr3 = arr3.flat(2);
  console.log('flatArr3', flatArr3);
  const arr4 = [1, 2, [3, 4, [5, 6]]];
  const flatArr4 = arr4.flat(3);
  console.log('flatArr4', flatArr4);
  return Object.assign({}, {
    ...data,
    flat
  });
};

module.exports = {
  flat
};
