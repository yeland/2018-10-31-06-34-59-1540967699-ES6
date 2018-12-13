'use strict';

function hybrid_operation(collection) {
  return calculate_elements_sum(map_to_three_multiples_add_two(collection));
  //在这里写入代码
}
var map_to_three_multiples_add_two = function(collections){
  var b = collections.map(function (item) {
    return (item * 3 + 2);
  })
  return b;
};
function calculate_elements_sum(collection) {
  var sum = collection.reduce(function (preEle, ele) {
    return preEle+ele;
  });
  return sum;
}
module.exports = hybrid_operation;

