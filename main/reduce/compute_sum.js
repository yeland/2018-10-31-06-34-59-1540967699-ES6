'use strict';

function calculate_elements_sum(collection) {
  return collection.reduce(function (preEle, ele) {
    return preEle + ele;
  });
}

module.exports = calculate_elements_sum;

