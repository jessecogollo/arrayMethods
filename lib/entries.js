'use strict';

const entries = (data) => {
  const entries = data.reverse.entries();
  // console.log('entries0', entries.next().value);
  // console.log('entries1', entries.next().value);
  // console.log('entries2', entries.next().value);
  // console.log('entries3', entries.next().value);
  // console.log('entries4', entries.next().value);
  // console.log('entries5', entries.next().value);
  // console.log('entries6', entries.next().value);
  // console.log('entries7', entries.next().value);
  // console.log('entries8', entries.next().value);
  return Object.assign({}, {
    ...data,
    entries
  });
};

module.exports = {
  entries
};
