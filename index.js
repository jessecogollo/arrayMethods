'use strict';

const {
  getData,
  length
} = require('./lib/index');

const fnThen = (result) => {
  // console.log('array:', result.array);
  console.log('length:', result.length);
  return result;
};

const fnCatch = (error) => {
  console.log('error', error);
  return error;
};

getData()
  .then(length)
  .then(fnThen)
  .catch(fnCatch);
