'use strict';

function compute_average(collection) {
  var sum = collection.reduce(function (preEle, ele) {
    return preEle+ele;
  });
  return Math.round(sum/collection.length * 10)/10;
}

module.exports = compute_average;

