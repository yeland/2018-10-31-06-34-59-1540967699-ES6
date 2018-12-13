'use strict';

function calculate_elements_sum(collection) {
  var sum = collection.reduce(function (preEle, ele) {
    return preEle+ele;
  });
  return sum;
  //在这里写入代码
}

module.exports = calculate_elements_sum;

