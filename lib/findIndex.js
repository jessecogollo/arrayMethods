'use strict';

const findEventGreaterThan200 = (event) => {
  return event.yes_rsvp_count > 200;
};

const findIndex = (data) => {
  return Object.assign({
    ...data,
    findIndex: data.array.findIndex(findEventGreaterThan200)
  });
};

module.exports = {
  findIndex
};
