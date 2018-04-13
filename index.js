'use strict';

const {
  concat,
  every,
  fill,
  filter,
  find,
  findIndex,
  forEach,
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
  // console.log('concat:', result.concat);// .length = result.array.length + result.copy.length
  // console.log('every:', result.every);
  // console.log('fill:', result.fill);
  // console.log('filter:', result.filter);
  // console.log('find:', result.find);
  // console.log('findIndex:', result.findIndex);
  // console.log('forEach:', result.forEach);
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
  .then(every)
  .then(fill)
  .then(filter)
  .then(find)
  .then(findIndex)
  .then(forEach)
  .then(fnThen)
  .catch(fnCatch);
