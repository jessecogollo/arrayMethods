'use strict';

const tosource = (data) => {
  const tosource = `No aplica para Node.JS ¯\\_(ツ)_/¯`;
  return Object.assign({}, {
    ...data,
    tosource
  });
};

module.exports = {
  tosource
};
