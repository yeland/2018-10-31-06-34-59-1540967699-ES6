'use strict';

function amount_even(collection) {
  return calculate_elements_sum(choose_even(collection));
  //在这里写入代码
}
function choose_even(collection) {
  //在这里写入代码
  var even = collection.filter(function (element) {
    return element%2 == 0;
  });
  return even;
}
function calculate_elements_sum(collection) {
  var sum = collection.reduce(function (preEle, ele) {
    return preEle+ele;
  });
  return sum;
  //在这里写入代码
}
module.exports = amount_even;
