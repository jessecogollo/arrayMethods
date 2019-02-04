'use strict';

const reduce = (data) => {
  const reduce = data.array.reduce((acum, current) => acum + current.yes_rsvp_count, 0);
  return Object.assign({}, {
    ...data,
    reduce
  });
};

module.exports = {
  reduce
};
