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
  includes,
  indexOf,
  isArray,
  join,
  keys,
  lastIndexOf,
  length,
  map,
  of,
  pop,
  push,
  reduce,
  reduceright,
  reverse,
  shift,
  slice
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
  // console.log('includes:', result.includes);
  // console.log('indexOf:', result.indexOf);
  // console.log('join:', result.join);
  // console.log('keys:', result.keys);
  // console.log('lastIndexOf:', result.lastIndexOf);
  // console.log('map:', result.map);
  // console.log('pop:', result.pop);
  // console.log('push:', result.push);
  // console.log('reduce:', result.reduce);
  // console.log('reduceright:', result.reduceright);
  // console.log('reverse:', result.reverse);
  // console.log('shift:', result.shift);
  console.log('slice:', result.slice);
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
  .then(includes)
  .then(indexOf)
  .then(join)
  .then(keys)
  .then(lastIndexOf)
  .then(map)
  .then(pop)
  .then(push)
  .then(reduce)
  .then(reduceright)
  .then(reverse)
  .then(shift)
  .then(slice)
  .then(fnThen)
  .catch(fnCatch);
