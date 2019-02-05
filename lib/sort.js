'use strict';

const sort = (data) => {
  const sort = data.array.sort((obj1, obj2) => obj1.yes_rsvp_count - obj2.yes_rsvp_count)
  .map(({name, yes_rsvp_count}) => {
    return {
      name,
      yes_rsvp_count
    }
  });
  return Object.assign({}, {
    ...data,
    sort
  });
};

module.exports = {
  sort
};
