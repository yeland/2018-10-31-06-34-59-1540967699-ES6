'use strict';

function compute_median(collection) {
  var mid;
  collection.sort(function (val1, val2) {
    return val1 - val2;
  });
  if (collection.length % 2 == 0) {
    return even_median(collection);
  } else {
    return odd_median(collection);
  }
}
function even_median(collection) {
  return (collection[collection.length / 2 - 1] + collection[collection.length / 2]) / 2;
}
function odd_median(collection) {
  return collection[Math.floor(collection.length / 2)];
}

module.exports = compute_median;


