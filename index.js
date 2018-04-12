'use strict';

const {
  from,
  getData,
  isArray,
  length
} = require('./lib/index');

const fnThen = (result) => {
  // console.log('array:', result.array);
  // console.log('length:', result.length);
  // console.log('from:', result.copy);
  console.log('isArray:', result.isArray);
  return result;
};

const fnCatch = (error) => {
  console.log('error', error);
  return error;
};

getData()
  .then(length)
  .then(from)
  .then(isArray)
  .then(fnThen)
  .catch(fnCatch);
