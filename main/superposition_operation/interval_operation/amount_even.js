'use strict';

function amount_even(collection) {
  return calculate_elements_sum(choose_even(collection));
}
function choose_even(collection) {
  return collection.filter(function (element) {
    return element%2 == 0;
  });
}
function calculate_elements_sum(collection) {
  return collection.reduce(function (preEle, ele) {
    return preEle+ele;
  });
}

module.exports = amount_even;
