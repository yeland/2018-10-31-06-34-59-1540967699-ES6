'use strict';

function average_uneven(collection) {
  return compute_average(choose_odd(collection));
}
function choose_odd(collection) {
  return collection.filter(function (element) {
    return element%2;
  });
}
function compute_average(collection) {
  var sum = collection.reduce(function (preEle, ele) {
    return preEle+ele;
  });
  return Math.round(sum/collection.length);
}

module.exports = average_uneven;
