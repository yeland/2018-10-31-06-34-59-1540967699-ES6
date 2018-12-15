'use strict';

function hybrid_operation_to_uneven(collection) {
  return calculate_elements_sum(map_to_three_multiples_add_five(choose_odd(collection)));
}
function choose_odd(collection) {
  return collection.filter(function (element) {
    return element%2;
  });
}
function map_to_three_multiples_add_five (collections){
  return collections.map(function (item) {
    return (item * 3 + 5);
  })
}
function calculate_elements_sum(collection) {
  return collection.reduce(function (preEle, ele) {
    return preEle+ele;
  });
}
module.exports = hybrid_operation_to_uneven;

