'use strict';

let spilt_to_zero = (number, interval) => {
  let collection = [];
  let i = number;
  do {
    collection.push(i);
    i = Math.round((i - interval) * 10) / 10;
  } while (i > 0)
  collection.push(i);
  return collection;
}

module.exports = spilt_to_zero;
