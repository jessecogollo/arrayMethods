'use strict';

const {
  getData
} = require('./lib/connection');

const fnThen = (result) => {
  console.log('result', result);
  return result;
};

const fnCatch = (error) => {
  console.log('error', error);
  return error;
};

getData()
  .then(fnThen)
  .catch(fnCatch);
