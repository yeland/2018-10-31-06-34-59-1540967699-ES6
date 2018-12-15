'use strict';

function compute_median(collection) {
  var mid;
  collection.sort(function (val1, val2) {
    return val1 - val2;
  });
  if (collection.length % 2 == 0) {
    mid = (collection[collection.length / 2 - 1] + collection[collection.length / 2]) / 2;
  } else {
    mid = collection[Math.floor(collection.length / 2)];
  }
  return mid;
}

module.exports = compute_median;


