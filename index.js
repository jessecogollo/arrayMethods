'use strict';

const {
  from,
  getData,
  isArray,
  length,
  of
} = require('./lib/index');

const fnThen = (result) => {
  // console.log('array:', result.array);
  // console.log('length:', result.length);
  // console.log('from:', result.copy);
  // console.log('isArray:', result.isArray);
  console.log('of:', result.of);
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
  .then(of)
  .then(fnThen)
  .catch(fnCatch);
