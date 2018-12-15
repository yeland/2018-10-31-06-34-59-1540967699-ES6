'use strict';

function hybrid_operation(collection) {
  return calculate_elements_sum(map_to_three_multiples_add_two(collection));
}
function map_to_three_multiples_add_two(collections){
  return collections.map(function (item) {
    return (item * 3 + 2);
  })
};
function calculate_elements_sum(collection) {
  return collection.reduce(function (preEle, ele) {
    return preEle+ele;
  });
}

module.exports = hybrid_operation;

