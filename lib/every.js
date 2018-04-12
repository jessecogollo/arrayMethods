'use strict';

const checkTempName = (element) => {
  // console.log('element', element.name);
  // console.log('yes_rsvp_count', element.yes_rsvp_count);
  // console.log('element', element.visibility);
  return element.yes_rsvp_count > 50;
  // return element.visibility === 'public';
};

const every = (data) => {
  return Object.assign({
    ...data,
    every: data.array.every(checkTempName)
  });
};

module.exports = {
  every
};
