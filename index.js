'use strict';

const {
  concat,
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
  // console.log('of:', result.of);
  console.log('concat:', result.concat);// .length = result.array.length + result.copy.length
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
  .then(concat)
  .then(fnThen)
  .catch(fnCatch);
