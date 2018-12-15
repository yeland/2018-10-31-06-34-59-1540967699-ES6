'use strict';

function hybrid_operation_to_uneven(collection) {
  return map_to_three_multiples_add_two(choose_odd(collection));
}
function choose_odd(collection) {
  return collection.filter(function (element) {
    return element % 2;
  });
}
function map_to_three_multiples_add_two(collections) {
  return collections.map(function (item) {
    return (item * 3 + 2);
  })
}

module.exports = hybrid_operation_to_uneven;

