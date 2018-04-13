'use strict';

const filterEventsGreaterThan100 = (event) => {
  // console.log('event', event);
  return event.yes_rsvp_count > 100;
};

const filter = (data) => {
  return Object.assign({
    ...data,
    filter: data.array.filter(filterEventsGreaterThan100)
  });
};

module.exports = {
  filter
};
