'use strict';

function hybrid_operation_to_uneven(collection) {
  return calculate_elements_sum(map_to_three_multiples_add_five(choose_odd(collection)));
  //在这里写入代码
}
function choose_odd(collection) {
  var odd = collection.filter(function (element) {
    return element%2;
  });
  return odd;
}
function map_to_three_multiples_add_five (collections){
  var b = collections.map(function (item) {
    return (item * 3 + 5);
  })
  return b;
}
function calculate_elements_sum(collection) {
  var sum = collection.reduce(function (preEle, ele) {
    return preEle+ele;
  });
  return sum;
}
module.exports = hybrid_operation_to_uneven;

