'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  return collection_a.filter(function (element_a) {
    return collection_b.some(function (element_b) {
      return !(element_a % element_b);
    })
  })
}

module.exports = choose_divisible_integer;
