'use strict';

const findEventGreaterThan200 = (event) => {
  return event.yes_rsvp_count > 200;
};

const find = (data) => {
  return Object.assign({
    ...data,
    find: data.array.find(findEventGreaterThan200)
  });
};

module.exports = {
  find
};
