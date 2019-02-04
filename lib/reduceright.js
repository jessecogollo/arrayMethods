'use strict';

const reduceright = (data) => {
  const reduceright = data.array.reduceRight((acum, current) => acum + current.yes_rsvp_count, 0);
  // console.log('prom all rsvp but right to left', reduceright / data.array.length);
  return Object.assign({}, {
    ...data,
    reduceright
  });
};

module.exports = {
  reduceright
};
