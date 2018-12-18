'use strict';

function get_integer_interval(number_a, number_b) {
  var collection = [];
  if (number_a < number_b) {
    for (let i = number_a; i <= number_b; i++) {
      collection.push(i);
    }
  } else {
    for (let i = number_a; i >= number_b; i--) {
      collection.push(i);
    }
  }
  return collection;
}

module.exports = get_integer_interval;

