'use strict';

const map = (data) => {
  console.log('array', data.array[0]);
  const map = data.array.map(({name, yes_rsvp_count, local_date, venue}) => {
    return {
      name,
      yes_rsvp_count,
      local_date,
      venue
    }
  });
  return Object.assign({
    ...data,
    map
  });
};

module.exports = {
  map
};
