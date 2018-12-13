'use strict';

function hybrid_operation_to_uneven(collection) {
  return map_to_three_multiples_add_two(choose_odd(collection));
  //在这里写入代码
}
function choose_odd(collection) {
  var odd = collection.filter(function (element) {
    return element%2;
  });
  return odd;
}
function map_to_three_multiples_add_two (collections){
  var b = collections.map(function (item) {
    return (item * 3 + 2);
  })
  return b;
}
module.exports = hybrid_operation_to_uneven;

